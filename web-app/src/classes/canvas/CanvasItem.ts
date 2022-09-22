import { ApmCanvas } from './ApmCanvas'

export class CanvasItem {
  canvas: ApmCanvas
  width: number
  height: number
  left: number
  top: number
  color: string
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

  constructor(canvas, data) {
    this.canvas = canvas
    this.color = data.color
    this.left = data.left
    this.top = data.top
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
