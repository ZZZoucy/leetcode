// 方法一：ES6 Set
arr = [1, 2, 1, 3, 4, 5, 2];
let a = Array.from(new Set(arr));

// 方法二：排序 + 一次 for 循环遍历
arr.sort((a, b) => a - b);
let res = [];
function fn() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            res.push(arr[i]);
        }
    }
    return res;
}

// 方法三：双重 for 循环 + splice
arr = [1, 2, 1, 3, 4, 5, 2];
function fn() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

// 方法四：filter + indexOf
arr = [1, 2, 1, 3, 4, 5, 2];
const fn = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

// 方法五：哈希表 new Map()
arr = [1, 2, 1, 3, 4, 5, 2];
let map = new Map();
let res = [];
function fn() {
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false);
            res.push(arr[i]);
        }
    }
    return res;
}
