const EdgeOffset = 80
const TooltipOffset = 3

function updateTooltip(e) {
  const el = e.currentTarget
  const tooltip = el.querySelector('.u-tooltip')
  let eRect = el.getBoundingClientRect()
  let tRect = tooltip.getBoundingClientRect()
  let vWidth = window.innerWidth
  let vHeight = window.innerHeight
  let left = eRect.width / 2 - tRect.width / 2
  let top = eRect.height + TooltipOffset

  if (eRect.left + tRect.width / 2 < EdgeOffset) { // too close to the left edge
    left = eRect.width + TooltipOffset
    top = (eRect.height - tRect.height) / 2
  }

  if ((eRect.bottom + tRect.height + EdgeOffset) >= vHeight) { // too close to bottom edge
    top = 0 - tRect.height - TooltipOffset
  }

  if ((eRect.left + tRect.width / 2 + EdgeOffset) >= vWidth) { // too close to right edge
    left = 0 - tRect.width - TooltipOffset
    top = (eRect.height - tRect.height) / 2
  }

  tooltip.style.left = left + 'px'
  tooltip.style.top = top + 'px'
}

export const vTooltip = {
  mounted: (el: any, { value }) => {
    const tooltip = document.createElement('span')
    tooltip.classList.add('u-tooltip')
    tooltip.innerText = value
    getComputedStyle(el).position === 'absolute' || (el.style.position = 'relative')
    el.appendChild(tooltip)
    el.classList.add('u-tooltip-parent')

    el.addEventListener('mouseenter', updateTooltip)
  },
  unmounted: (el) => {
    el.removeEventListener('mouseenter', updateTooltip)
  }
}
