import { SitemapPage } from './SitemapPage'
import { SitemapSection } from './SitemapSection'

export class Sitemap {
  canvas
  id: any
  name: string
  isTemplate: Boolean = false
  pages: SitemapPage[] = []
  sections: SitemapSection[] = []
  createdAt: any
  updatedAt: any
  ownerId: any

  constructor(canvas, data: any = {}) {
    this.canvas = canvas

    try {
      for (const key in data) {
        if (key === 'pages') {
          for (const page of data.pages) {
            this.pages.push(new SitemapPage(this, page))
          }
        } else if (key === 'sections') {
          for (const section of data.sections) {
            this.sections.push(new SitemapSection(this, section))
          }
        } else {
          this[key] = data[key]
        }
      }
    } catch (e) {
      console.error('Malformed sitemap data.', e, data)
    }
  }
}
