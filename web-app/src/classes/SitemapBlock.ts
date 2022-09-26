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
    } catch (e) {
      console.error('Malformed block data.', e, data)
    }
  }

  update() {
    const fontSize = cssFontSize() * 0.8
    const parent = this.page.ci
    const { blockGap, blockHeight } = this.page.styles
    const ci: Partial<CanvasItem> = {
      left: parent.left + parent.paddingX,
      top: 0,
      width: parent.width - parent.paddingX * 2,
      fontSize,
      paddingX: fontSize * 0.5,
      paddingY: fontSize * 0.5,
      height: 0,
      borderRadius: fontSize * 0.25,
      fillColor: this.color,
      text: this.name,
      textColor: cssVar('--light'),
    }
    ci.height = blockHeight
    ci.top = parent.top + blockHeight + (blockHeight + blockGap) * this.index

    this.ci = new CanvasItem(this.page.sitemap.canvas, ci)

    return this
  }

  draw() {
    this.ci.draw()
  }
}
