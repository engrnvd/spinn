import { Sitemap } from './Sitemap'
import { SitemapPage } from './SitemapPage'

export class SitemapSection {
  sitemap: Sitemap
  name: string
  pages: SitemapPage[] = []

  constructor(sitemap: Sitemap, data) {
    this.sitemap = sitemap
    try {
      for (const key in data) {
        if (key === 'pages') {
          for (const page of data.pages) {
            this.pages.push(new SitemapPage(this.sitemap, page, this))
          }
        } else {
          this[key] = data[key]
        }
      }
    } catch (e) {
      console.error('Malformed section data.', e, data)
    }
  }
}
