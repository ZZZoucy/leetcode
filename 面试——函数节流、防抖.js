// 函数节流 就是「技能冷却中」
/*
const throttle = (fn, time) => {
    let 冷却中 = false;
    return (...args) => {
        if (冷却中) return;
        fn.call(undefined, ...args);
        冷却中 = true;
        setTimeout(() => {
            冷却中 = false;
        }, time);
    };
};
*/
const throttle = (f, time) => {
    let timer = null;
    return (...args) => {
        if (timer) {
            return;
        }
        f.call(undefined, ...args);
        timer = setTimeout(() => {
            timer = null;
        }, time);
    };
};

const t = () => {
    console.log("闪现");
};

const t1 = throttle(t, 3000);

// 函数防抖 就是「技能被打断，就要重新开始」
/*
const debounce = (fn, time) => {
    let 回城计时器 = null;
    return (...args) => {
        if (回城计时器 !== null) {
            clearTimeout(回城计时器); // 打断回城
        }
        // 重新回城
        回城计时器 = setTimeout(() => {
            fn.call(undefined, ...args); // 回城后调用 fn
            回城计时器 = null;
        }, time);
    };
};
*/
const debounce = (fn, time) => {
    let timer = null;
    return (...args) => {
        if (timer !== null) {
            clearTimeout(timer); // 打断回城
        }
        // 重新回城
        timer = setTimeout(() => {
            fn.call(undefined, ...args); // 回城后调用 fn
            timer = null;
        }, time);
    };
};
const d = () => {
    console.log("回城成功");
};

const d1 = debounce(d, 3000);
