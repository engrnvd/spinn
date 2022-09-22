import { ApmCanvas } from './ApmCanvas'

export class CanvasItem {
  canvas: ApmCanvas

  // rect
  width: number
  height: number
  left: number
  top: number
  fillColor: string
  borderWidth = 0
  borderColor: string
  borderRadius = 0
  // text
  textColor: string
  text: string
  fontSize: 0
  paddingX = 0
  paddingY = 0

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

  drawRect() {
    if (!this.fillColor && !this.borderWidth) return
    const br = this.borderRadius
    const ctx = this.canvas.ctx

    ctx.beginPath()
    ctx.moveTo(this.left, this.top + br)
    if (br) ctx.quadraticCurveTo(this.left, this.top, this.left + br, this.top)
    let nextX = this.right - br
    ctx.lineTo(nextX, this.top)
    if (br) ctx.quadraticCurveTo(this.right, this.top, this.right, this.top + br)
    let nextY = this.bottom - br
    ctx.lineTo(this.right, nextY)
    if (br) ctx.quadraticCurveTo(this.right, this.bottom, this.right - br, this.bottom)
    nextX = this.left + br
    ctx.lineTo(nextX, this.bottom)
    if (br) ctx.quadraticCurveTo(this.left, this.bottom, this.left, this.bottom - br)
    nextY = this.top + br
    ctx.lineTo(this.left, nextY)

    if (this.fillColor) ctx.fillStyle = this.fillColor
    if (this.borderColor) ctx.strokeStyle = this.borderColor
    if (this.borderWidth) ctx.lineWidth = this.borderWidth

    if (this.fillColor) ctx.fill()
    if (this.borderColor || this.borderWidth) ctx.stroke()
    ctx.closePath()
  }

  draw() {
    if (this.isOutOfScreen()) return
    this.drawRect()
  }

  isOutOfScreen() {
    return !this.canvas.isPointVisible(this.left, this.top)
      && !this.canvas.isPointVisible(this.right, this.bottom)
      && !this.canvas.isPointVisible(this.right, this.top)
      && !this.canvas.isPointVisible(this.left, this.bottom)
  }

  update() {
    if (!this.canvas.draggedItem) {
      if (this.hoverable && this.hasMouseOver) {
        this.canvas.setHoveredItem(this)
      } else if (this.isHoveredItem) {
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
