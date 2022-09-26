import { cssVar } from '../helpers/misc'
import { CanvasItem } from './canvas/CanvasItem'
import { Connection } from './canvas/Connection'
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
  index: number = 0
  blocks: SitemapBlock[] = []
  children: SitemapPage[] = []
  ci: CanvasItem = null

  constructor(sitemap: Sitemap, data, section: SitemapSection = null, parentPage: SitemapPage = null) {
    this.sitemap = sitemap
    this.section = section
    this.parent = parentPage

    try {
      const { children, blocks, ...rest } = data

      for (const key in rest) {
        this[key] = rest[key]
      }

      if (children) {
        children.forEach((child, index) => {
          child.index = child.index || index
          this.children.push(new SitemapPage(this.sitemap, child, this.section, this))
        })
      }
      if (blocks) {
        for (const block of blocks) {
          this.blocks.push(new SitemapBlock(this, block))
        }
      }
    } catch (e) {
      console.error('Malformed page data.', e, data)
    }
  }

  update() {
    const parent = this.parent || this.section
    const canvas = this.sitemap.canvas
    const fontSize = parseInt(cssVar('--font-size'))
    const pageWidth = 160
    const ci = {
      left: 0,
      top: 0,
      width: pageWidth,
      fontSize: fontSize,
      paddingX: fontSize * 0.5,
      paddingY: fontSize * 0.5,
      height: 0,
      borderRadius: fontSize * 0.25,
      borderColor: this.color,
      borderWidth: 1,
      text: this.name,
      textColor: this.color,
    }
    ci.height = ci.fontSize + ci.paddingY * 2

    if (this.isRoot) {
      ci.top = 50
      ci.left = canvas.vpCenter.x - pageWidth / 2
    } else if (parent) {
      const children = this.parent ? this.parent.children : this.section.pages
      const gap = pageWidth / 2
      const totalW = children.length * pageWidth + (children.length - 1) * gap
      const startLeft = parent.ci.cx - totalW / 2
      ci.left = startLeft + this.index * (pageWidth + gap)
      ci.top = parent.ci.bottom + gap
    }

    this.ci = new CanvasItem(this.sitemap.canvas, ci)

    if (this.children) this.children.forEach(p => p.update())

    return this
  }

  draw() {
    this.ci.draw()
    if (this.children) this.children.forEach(p => {
      p.draw()
      const connection = new Connection(this, p)
      connection.draw()
    })
  }
}
