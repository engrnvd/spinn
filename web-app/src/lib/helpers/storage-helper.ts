import { decrypt, encrypt } from './encryption-helper'
import { browser } from '$app/environment'
import { ENC_SALT } from './constants'

export const Storage = {
  get(key: string, defaultValue = '') {
    if (!browser) return defaultValue
    let value = localStorage.getItem(key)
    return decrypt(value, ENC_SALT) || defaultValue
  },
  remove(key: string) {
    return localStorage.removeItem(key)
  },
  set(key: string, value: any) {
    if (!value) return this.remove(key)
    return localStorage.setItem(key, encrypt(value, ENC_SALT))
  },
  getObject(key: string) {
    let obj = this.get(key)
    try {
      obj = JSON.parse(obj)
      return obj
    } catch (e) {
      return null
    }
  },
  setObject(key: string, value: any) {
    if (!value) return this.remove(key)
    return this.set(key, JSON.stringify(value))
  },
}
