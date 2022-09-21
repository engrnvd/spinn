import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sitemap: null,
  }),
  getters: {},
  actions: {
    setSitemap(sitemap) {
      this.sitemap = sitemap
    }
  },
})
