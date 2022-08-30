export function _debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

export function _sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}

export function _deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export class DebounceFn {
    timer = null
    delay = 0

    constructor(delay) {
        this.delay = delay
    }

    run(fn) {
        clearTimeout(this.timer)
        this.timer = setTimeout(fn, this.delay)
    }
}
