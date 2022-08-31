export function _sleep(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

export function _deepClone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

export class DebounceFn {
  timer: number | undefined
  delay: number = 0

  constructor(delay: number) {
    this.delay = delay
  }

  run(fn: Function) {
    clearTimeout(this.timer)
    this.timer = setTimeout(fn, this.delay)
  }
}
