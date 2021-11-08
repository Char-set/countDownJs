这是一个基于 [`eventemitter3`](https://github.com/primus/eventemitter3) 库扩展，实现了基本倒计时功能的库

## 使用方法

```js
    // <script src="../dist/count-down.js"></script>

    let {Countdown, CountdownEventName} = window.countDownJs 

    // 或者 npm i countDownJs

    import {Countdown, CountdownEventName} from 'countDownJs'

    // 初始化一个倒计时，并注册倒计时事件

    // START 
    // STOP 
    // RUNNING 

    const countdown = new Countdown(Date.now() + 75 * 60 * 1000, 100);
    
    countdown.on(CountdownEventName.RUNNING, (remainTimeData) => {

        const { hours, minutes, seconds, count} = remainTimeData;

        console.log([hours, minutes, seconds, count].map(fillZero).join(':'));
    }); 
```

