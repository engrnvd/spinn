import { defineStore } from 'pinia'
import { SitemapBlock } from '../classes/SitemapBlock'
import { SitemapPage } from '../classes/SitemapPage'

export const useAppStore = defineStore('app', {
  state: () => ({
    sitemap: null,
  }),
  getters: {
    canvas() {
      return this.sitemap?.canvas
    },
    hasHoveredPage() {
      return this.canvas?.hoveredItem?.meta instanceof SitemapPage
    },
    hasHoveredBlock() {
      return this.canvas?.hoveredItem?.meta instanceof SitemapBlock
    },
  },
  actions: {
    setSitemap(sitemap) {
      this.sitemap = sitemap
    }
  },
})
