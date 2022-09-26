import { SitemapPage } from './SitemapPage'

export class SitemapBlock {
  page: SitemapPage
  name: string
  body: string
  color: string
  wireframe: any
  id: any
  index: number

  constructor(page, data) {
    this.page = page
    try {
      for (const key in data) {
        this[key] = data[key]
      }
    } catch (e) {
      console.error('Malformed block data.', e, data)
    }
  }
}
