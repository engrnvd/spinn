import { ApmCanvas } from './ApmCanvas'

export class CanvasItem {
  canvas: ApmCanvas

  // rect
  width: number
  height: number
  left: number
  top: number
  fillColor: string
  // text
  textColor: string
  text: string
  paddingX = 0
  paddingY = 0

  borderWidth = 0
  borderColor = ''
  borderRadius = 0

  hoverable = false
  editable = false
  selectable = false
  draggable = false

  get right() {
    return this.left + this.width
  }

  get bottom() {
    return this.top + this.height
  }

  constructor(canvas: ApmCanvas, data: Partial<CanvasItem>) {
    this.canvas = canvas

    for (const key in data) {
      this[key] = data[key]
    }
  }

  get ctx() {
    return this.canvas.ctx
  }

  isOutOfScreen() {
    return !this.canvas.isPointVisible(this.left, this.top)
      && !this.canvas.isPointVisible(this.right, this.bottom)
      && !this.canvas.isPointVisible(this.right, this.top)
      && !this.canvas.isPointVisible(this.left, this.bottom)
  }

  update() {
    if (!this.canvas.draggedItem) {
      if (this.hasMouseOver) {
        this.canvas.setHoveredItem(this)
      } else if (this.canvas.hoveredItem === this) {
        this.canvas.setHoveredItem(null)
      }
    }

    let selectedItems = this.canvas?.selection?.items || []
    if (this.canvas.draggedItem === this || (selectedItems.includes(this) && this.canvas.mouse.pressed)) {
      this.left += this.canvas.mouse.dx
      this.top += this.canvas.mouse.dy
    }
  }

  get isHoveredItem() {
    return this.canvas.hoveredItem === this
  }

  get hasMouseOver() {
    const mouse = this.canvas.mouse
    let mouseX = mouse.x - this.canvas.origin.x
    let mouseY = mouse.y - this.canvas.origin.y

    let itemL = this.left
    let itemT = this.top
    let itemB = this.bottom
    let itemR = this.right

    const scale = this.canvas.zoom.scale
    if (scale !== 1) {
      itemL *= scale
      itemT *= scale
      itemB *= scale
      itemR *= scale
    }

    return itemL < mouseX && mouseX < itemR
      && itemT < mouseY && mouseY < itemB
  }
}
