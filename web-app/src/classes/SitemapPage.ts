import { Sitemap } from './Sitemap'
import { SitemapBlock } from './SitemapBlock'
import { SitemapSection } from './SitemapSection'

export class SitemapPage {
  sitemap: Sitemap
  section: SitemapSection
  parent: SitemapPage
  name: string
  color: string
  link: string
  isRoot: Boolean = false
  blocks: SitemapBlock[] = []
  children: SitemapPage[] = []

  constructor(sitemap: Sitemap, data, section: SitemapSection = null, parent: SitemapPage = null) {
    this.sitemap = sitemap
    this.section = section
    try {
      for (const key in data) {
        if (key === 'children') {
          for (const child of data.children) {
            this.children.push(new SitemapPage(this.sitemap, child, this.section, this))
          }
        } else if (key === 'blocks') {
          for (const block of data.blocks) {
            this.blocks.push(new SitemapBlock(this, block))
          }
        } else {
          this[key] = data[key]
        }
      }
    } catch (e) {
      console.error('Malformed page data.', e, data)
    }
  }
}
