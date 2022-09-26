import { cssVar } from '../helpers/misc'
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
    const fontSize = parseInt(cssVar('--font-size'))
    const parent = this.page.ci
    const ci: Partial<CanvasItem> = {
      left: parent.left + parent.paddingX,
      top: 0,
      width: parent.width - parent.paddingX * 2,
      fontSize: fontSize * 0.8,
      paddingX: fontSize * 0.5,
      paddingY: fontSize * 0.5,
      height: 0,
      borderRadius: fontSize * 0.25,
      borderColor: this.color,
      borderWidth: 1,
      text: this.name,
      textColor: this.color,
    }
    const blockHeight = fontSize + ci.paddingY * 2
    const gap = fontSize * 0.5
    ci.height = blockHeight
    ci.top = parent.top + blockHeight + (blockHeight + gap) * this.index

    this.ci = new CanvasItem(this.page.sitemap.canvas, ci)

    return this
  }

  draw() {
    this.ci.draw()
  }
}
