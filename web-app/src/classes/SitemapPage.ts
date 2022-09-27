import { cssFontSize } from '../helpers/misc'
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
        blocks.forEach((block, index) => {
          block.index = block.index || index
          this.blocks.push(new SitemapBlock(this, block))
        })
      }

      const { width, fontSize, paddingX, paddingY, borderRadius, borderWidth } = this.styles
      this.ci = new CanvasItem(this.sitemap.canvas, {
        left: 0,
        top: 0,
        width,
        fontSize: fontSize,
        paddingX,
        paddingY,
        height: 0,
        borderRadius,
        borderColor: this.color,
        borderWidth,
        text: this.name,
        textBold: true,
        textColor: this.color,
        hoverable: true,
        selectable: true,
        editable: true,
        meta: this,
      })
    } catch (e) {
      console.error('Malformed page data.', e, data)
    }
  }

  get styles() {
    const fontSize = cssFontSize() * 0.8
    const width = 160
    const paddingY = fontSize * 0.5
    const blockHeight = fontSize + paddingY * 2
    return {
      width,
      fontSize,
      paddingX: fontSize * 0.5,
      paddingY: fontSize * 0.5,
      borderRadius: fontSize * 0.25,
      blockHeight,
      borderWidth: 2,
      blockGap: fontSize * 0.25,
    }
  }

  update() {
    const parent = this.parent || this.section
    const canvas = this.sitemap.canvas
    const { width, blockHeight, blockGap } = this.styles
    const ci = this.ci
    ci.height = blockHeight * 2

    if (this.isRoot) {
      ci.top = 50
      ci.left = canvas.width / 2 - width / 2
    } else if (parent) {
      const children = this.parent ? this.parent.children : this.section.pages
      const gap = width / 2
      const totalW = children.length * width + (children.length - 1) * gap
      const startLeft = parent.ci.cx - totalW / 2
      ci.left = startLeft + this.index * (width + gap)
      ci.top = parent.ci.bottom + gap
    }

    if (this.blocks) this.blocks.forEach(b => {
      b.update()
      this.ci.height += b.ci.height + blockGap
    })

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
    if (this.blocks) this.blocks.forEach(b => b.draw())
  }
}
