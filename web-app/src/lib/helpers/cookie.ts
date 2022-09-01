export const Cookie = {
  get(name: string) {
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  },
  set(name: string, value: any, days: number = 0) {
    let expires = ''
    if (days) {
      let date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  },
  remove(name: string) {
    this.set(name, '')
  },
}
