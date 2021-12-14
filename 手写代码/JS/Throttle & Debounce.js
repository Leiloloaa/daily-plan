// 面试手写题 节流 和 防抖
// 节流：频繁的触发一个事件，只触发一次
// 防抖：频繁的触发一个事件，只触发最后一次

// 节流函数 可以看成是 地铁刷卡 通过的时间都是一样
// 防抖函数 可以看成是 公交刷卡 总是由最后一个上车的人决定是关门

function Throttle(fn, delay) {
    let timer = null
    return function() {
        if (timer) return
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
            timer = null
        }, delay);
    }
}

function Debounce(fn, delay) {
    let timer = null
    return function() {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
            timer = null
        }, delay)
    }
}