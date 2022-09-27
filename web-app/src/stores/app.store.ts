import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sitemap: null,
  }),
  getters: {
    canvas() {
      return this.sitemap?.canvas
    }
  },
  actions: {
    setSitemap(sitemap) {
      this.sitemap = sitemap
    }
  },
})
