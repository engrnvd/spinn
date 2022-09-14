/*
* The config object basically accepts all parameters that fetch does:
* https://developer.mozilla.org/en-US/docs/Web/API/fetch
* Other than that, following parameters can be sent
* delay: To delay the execution.Type: Number. Unit: milliseconds. Default: 0
* delayFirstRequest: Whether you want to delay the first request. Type: Boolean. default: false
* pagination: Whether to request paginated data. Type: Bool. Default: false
* paginationMode: replace | append. Type: Bool. Default: 'replace'. Set to 'append' to implement "load more" feature)
* */
import { FetchRequestConfig, HttpMethod } from './fetch-request-config'
import { Cookie } from './cookie'
import { TOKEN_KEY, USER_KEY } from './constants'
import { DebounceFn } from './misc'

export class FetchRequest {
  url
  firstRequest = true
  lastRequestId = null
  data = []
  error = ''
  loading = false
  loaded = false
  perPageOriginal = null
  allLoaded = false
  // @ts-ignore
  sendFn: DebounceFn
  config: FetchRequestConfig = {
    delay: 0,
    delayFirstRequest: false,
  }

  constructor(url: string, method: HttpMethod = 'GET', config: FetchRequestConfig = {}) {
    this.url = url

    // check for pagination
    if (config.pagination) {
      // @ts-ignore
      this.data = { data: [] }
      config.params = config.params || {}
      config.params.perPage = config.params.perPage || 20
      config.params.page = config.params.page || 1
      config.paginationMode = config.paginationMode || 'replace'
    }

    this.mergeConfig(config)
    this.config.method = method
  }

  mergeConfig(config: FetchRequestConfig) {
    this.config = { ...this.config, ...config }
  }

  showError() {
    const logoutErrors = ['Wrong number of segments', 'logged out', 'You are not logged in!']
    if (logoutErrors.includes(this.error)) {
      this.logoutAndRefresh()
    }
    // todo: app.config.globalProperties.$notify('error', 'Something went wrong!', this.error)
  }

  logoutAndRefresh() {
    let loggedIn = Cookie.get(TOKEN_KEY)
    if (loggedIn) {
      Cookie.remove(USER_KEY)
      Cookie.remove(TOKEN_KEY)
    }

    // todo
    // store.commit('user/setAuthToken', '')
    // store.commit('user/setUser', null)
    // store.commit('menu/toggleUserMenuValues', userMenuItems)
    // store.commit('menu/toggleLoginModal', true)
  }

  send(config: FetchRequestConfig = {}) {
    return new Promise((resolve, reject) => {
      if (!this.url) {
        reject('No url to send request to')
        return
      }

      this.mergeConfig(config)
      config = this.config

      // make request
      this.loading = true
      if (config.paginationMode === 'append' && !this.firstRequest) {
        // @ts-ignore
        config.params.page++
      }
      this.loaded = false
      this.error = ''
      let delay = config.delay || 0
      if (this.firstRequest && !config.delayFirstRequest) delay = 0

      this.sendFn = this.sendFn || new DebounceFn(delay)
      this.sendFn.run(() => {
        // make new request
        fetch(this.url, config).then((res: Response) => res.json()).then(res => {
          // if (res.data?.status === 'fail' || res.data?.status === 'invalid_schema') {
          //   this.error = res.data?.message || 'Something went wrong'
          //   this.showError()
          //   return
          // }
          if (config.pagination) {
            // @ts-ignore
            if (config.params.page !== 1 && config.paginationMode === 'append') {
              // @ts-ignore
              this.data.data = this.data.data.concat(res.data)
            } else {
              // @ts-ignore
              this.data = res.data
            }

            // @ts-ignore
            if (!res.data.data || !res.data.data.length || this.data.data.length === parseInt(res.data.total)) {
              this.allLoaded = true
            }
          } else {
            // @ts-ignore
            this.data = res
          }
        }).catch(res => {
          if (typeof res === 'string' && res.match(/Failed to execute 'setRequestHeader' on 'XMLHttpRequest'/)) {
            this.logoutAndRefresh()
          }

          if (typeof res === 'string') this.error = res
          else this.error = res.data?.message || res.data?.error || res.data || 'Please try again later.'

          this.showError()
        }).finally(() => {
          this.firstRequest = false
          this.loading = false
          this.loaded = true
          if (this.error) reject(this.error)
          else resolve(this.data)
        })
      })
    })
  }

  upload(config: FetchRequestConfig, files = [], key = 'attachments', single = false) {
    if (files instanceof File) {
      // @ts-ignore
      files = [files]
    }

    if (files.length) {
      let formData = new FormData()
      if (config.hasOwnProperty('data')) {
        for (let key in config.body) {
          formData.set(key, typeof config.body[key] === 'object' ? JSON.stringify(config.body[key]) : config.body[key])
        }
      }
      if (single) {
        formData.append(key, files[0])
      } else {
        files.forEach(function (f) {
          formData.append(key + '[]', f)
        })
      }

      config.body = formData
    }

    return this.send(config)
  }
}



