import { AddBlockCommand } from '../commands/AddBlockCommand'
import { AddPageCommand } from '../commands/AddPageCommand'
import { CollapsePageCommand } from '../commands/CollapsePageCommand'
import { cssFontSize, cssVar } from '../helpers/misc'
import { defaultBlock, defaultPage } from '../helpers/sitemap-helper'
import { canvasHelper } from './canvas/canvas-helper'
import { CanvasItem } from './canvas/CanvasItem'
import { Connection } from './canvas/Connection'
import { Sitemap } from './Sitemap'
import { SitemapBlock } from './SitemapBlock'

export class SitemapPage {
  sitemap: Sitemap
  parent: SitemapPage
  _type = 'page'
  name: string
  color: string
  link: string
  isRoot: Boolean = false
  collapsed: Boolean = false
  blocks: SitemapBlock[] = []
  children: SitemapPage[] = []
  ci: CanvasItem = null
  header: CanvasItem = null

  constructor(sitemap: Sitemap, data, parent: SitemapPage = null) {
    this.sitemap = sitemap
    this.parent = parent

    try {
      const { children, blocks, ...rest } = data

      for (const key in rest) {
        this[key] = rest[key]
      }

      if (children) {
        children.forEach((child: SitemapPage, index) => {
          this.children.push(new SitemapPage(this.sitemap, child, this))
        })
      }
      if (blocks) {
        blocks.forEach((block, index) => {
          this.blocks.push(new SitemapBlock(this, block))
        })
      }

      const { width, fontSize, paddingX, paddingY, borderRadius, borderWidth, headerHeight } = this.styles
      this.ci = new CanvasItem(this.sitemap.canvas, {
        left: 0,
        top: 0,
        width,
        fontSize: fontSize,
        paddingX,
        paddingY,
        height: 0,
        borderRadius: [borderRadius, borderRadius, borderRadius, borderRadius],
        borderColor: this.color,
        borderWidth,
        text: this.name,
        textBold: true,
        textColor: this.color,
        hoverable: true,
        hoverOffset: fontSize,
        selectable: true,
        editable: true,
        meta: this,
      })

      this.header = new CanvasItem(this.sitemap.canvas, {
        left: 0,
        top: 0,
        height: headerHeight,
        width,
        hoverable: false,
        selectable: false,
        editable: false,
        meta: this,
        fillColor: this.color,
        fontSize: headerHeight / 2,
        paddingY: headerHeight / 4,
        textBold: true,
        paddingX: paddingX / 2,
        text: '● ● ●',
        textColor: cssVar('--light'),
        borderRadius: [borderRadius, borderRadius, 0, 0]
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
    const headerHeight = cssFontSize() * 0.5
    return {
      width,
      fontSize,
      paddingX: fontSize * 0.75,
      paddingY: fontSize * 0.5 + headerHeight,
      borderRadius: fontSize * 0.25,
      blockHeight,
      headerHeight,
      borderWidth: 2,
      blockGap: fontSize * 0.25,
    }
  }

  update() {
    const parent = this.parent
    const canvas = this.sitemap.canvas
    const { width, blockHeight, blockGap, headerHeight, paddingY } = this.styles
    const ci = this.ci
    ci.height = headerHeight + blockHeight * 2 + paddingY + blockGap
    ci.text = this.name
    ci.borderColor = ci.textColor = this.color

    if (this.isRoot) {
      this.header.top = ci.top = 50
      this.header.left = ci.left = canvas.width / 2 - width / 2
    } else if (parent) {
      const children = this.parent.children
      const gap = width / 2
      const totalW = children.length * width + (children.length - 1) * gap
      const startLeft = parent.ci.cx - totalW / 2
      const index = parent.children.indexOf(this)
      this.header.left = ci.left = startLeft + index * (width + gap)
      this.header.top = ci.top = parent.ci.bottom + gap
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
    this.header.draw()
    if (this.children && !this.collapsed) this.children.forEach(p => {
      p.draw()
      const connection = new Connection(this, p)
      connection.draw()
    })

    if (this.collapsed) this.drawCollapsedState()

    if (this.blocks) this.blocks.forEach(b => b.draw())
  }

  drawCollapsedState() {
    const ctx = this.ci.canvas.ctx
    const fontSize = cssFontSize() * 0.5
    canvasHelper.circle(ctx, this.ci.left, this.ci.bottom, fontSize)
    ctx.fill()
    ctx.textBaseline = 'top'
    ctx.fillStyle = cssVar('--light')
    ctx.font = `${fontSize}px ${cssVar('--font')}`
    const text = String(this.children.length)
    const textW = ctx.measureText(text).width
    ctx.fillText(text, this.ci.left - textW / 2, this.ci.bottom - fontSize / 2)
  }

  addChildAt(index, data = {}) {
    const page = new SitemapPage(this.sitemap, defaultPage(data), this)
    new AddPageCommand({ page, index }).execute()
    return page
  }

  addChild(childPageData = {}) {
    return this.addChildAt(this.children.length - 1, childPageData)
  }

  addSibling() {
    return this.parent.addChildAt(this.parent.children.indexOf(this) + 1)
  }

  addBlockAt(index, blockData = {}) {
    const block = new SitemapBlock(this, defaultBlock(blockData))
    new AddBlockCommand({ block, index }).execute()
    return block
  }

  addBlock(blockData = {}) {
    const index = this.blocks.length - 1
    return this.addBlockAt(blockData, index)
  }

  toggleCollapse() {
    new CollapsePageCommand({ page: this }).execute()
  }

}
