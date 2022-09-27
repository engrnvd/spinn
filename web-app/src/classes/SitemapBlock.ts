import { cssFontSize, cssVar } from '../helpers/misc'
import { CanvasItem } from './canvas/CanvasItem'
import { SitemapPage } from './SitemapPage'

export class SitemapBlock {
  page: SitemapPage
  name: string
  body: string
  color: string
  wireframe: any
  id: any
  index: number
  ci: CanvasItem = null

  constructor(page, data) {
    this.page = page
    try {
      for (const key in data) {
        this[key] = data[key]
      }

      const fontSize = cssFontSize() * 0.8
      this.ci = new CanvasItem(this.page.sitemap.canvas, {
        top: 0,
        fontSize,
        paddingX: fontSize * 0.5,
        paddingY: fontSize * 0.5,
        height: 0,
        borderRadius: fontSize * 0.25,
        fillColor: this.color,
        text: this.name,
        textColor: cssVar('--light'),
        selectable: true,
        editable: true,
        hoverable: true,
      })
    } catch (e) {
      console.error('Malformed block data.', e, data)
    }
  }

  update() {
    const parent = this.page.ci
    const { blockGap, blockHeight } = this.page.styles
    this.ci.left = parent.left + parent.paddingX
    this.ci.height = blockHeight
    this.ci.width = parent.width - parent.paddingX * 2
    this.ci.top = parent.top + blockHeight + (blockHeight + blockGap) * this.index

    return this
  }

  draw() {
    this.ci.draw()
  }
}
