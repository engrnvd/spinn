export function rotate(node: Element, params: { angle: number }) {
  const xfm = getComputedStyle(node).transform.replace('none', '')
  const angle = params.angle || 90
  // @ts-ignore
  node.style.transformOrigin = 'center'
  return () => ({
    css: (t: number) => {
      return `transform: ${xfm} rotate(${t * angle}deg)`
    }
  })
}
