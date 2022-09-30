function createRipple(event: any) {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const position = getComputedStyle(button).position
  position === 'absolute' || (button.style.position = 'relative')
  button.style.overflow = 'hidden'

  const circle = document.createElement('span')
  const diameter = Math.max(rect.width, rect.height)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - rect.x - radius}px`
  circle.style.top = `${event.clientY - rect.y - radius}px`
  circle.classList.add('ripple')

  const ripple = button.querySelector('.ripple')

  if (ripple) {
    ripple.remove()
  }

  button.appendChild(circle)
}

export const vRipple = {
  mounted: (el: any) => {
    el.addEventListener('click', createRipple)
  },
  unmounted: (el: any) => {
    el.removeEventListener('click', createRipple)
  },
}
