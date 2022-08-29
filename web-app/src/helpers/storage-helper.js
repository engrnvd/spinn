import { decrypt, encrypt } from "./encryption-helper.js";
import { ENC_SALT } from "./constants.js"
import { browser } from "$app/env"

export const Storage = {
    get(key, defaultValue = '') {
        if (!browser) return defaultValue
        let value = localStorage.getItem(key)
        return decrypt(value, ENC_SALT) || defaultValue
    },
    remove(key) {
        return localStorage.removeItem(key)
    },
    set(key, value) {
        if (!value) return this.remove(key)
        return localStorage.setItem(key, encrypt(value, ENC_SALT))
    },
    getObject(key) {
        let obj = this.get(key)
        try {
            obj = JSON.parse(obj)
            return obj
        } catch (e) {
            return null
        }
    },
    setObject(key, value) {
        if (!value) return this.remove(key)
        return this.set(key, JSON.stringify(value))
    },
}
