# 第一问：TS 和 JS 的区别是什么？有什么优势？
1. 语法层面：TypeScript = JavaScript + Type （TS 是 JS 的超集）
2. 执行环境层面：浏览器、Node.js 可以直接执行 JS，但是不能执行 TS
3. 编译层面：TS 有编译阶段，JS 没有（JS只有转译阶段和lint阶段）
4. 编写层面：TS 有类型判断，更加安全些

# 第二问：any、unknown、never 的区别是什么？
## any VS unknown
1. 二者都是顶级类型，任何类型的值都可以赋值给顶级类型变量：
```
let foo:any = 123
let bar:unknown = 123
```
2. 但是 unknown 比 any 更严格，any 是什么检查都不做，但是 unknown 会收窄类型
```
const value:unknown = 'Hello World'
const something:string = value       // 会报错

const something:string = value as string       // 不会报错
```
3. 如果上述代码改成 any，就不会报错了，但是最好还是能用 unknown 就先用 unknown，比较安全

## never 类型
never 类型的意思可以理解成 不应该出现的类型。
```
interface A{
    type: 'a'
}
interface B{
    type: 'b'
}

type All = A | B

function handleValue(val:All){
    switch(val.type){
        case 'a':
            // val 在这里是 A
            break
        case 'b':
            // val 在这里是 B
            break
        default:
            // val 在这里是 never ，除了定义的 AB 就不应该有别的类型
            const exhaustiveCheck: never = val    
            break
    }
}

```

# 第三问：type 和 interface 的区别是什么？
1. 组合方式：interface 用 extends 实现继承，type 用 & 来合并类型
```
interface B{ b:string }
interface A extends B { a:string }
const a:A = {
    a:'hi'
    b:'hi'
}

type BB = { bb:string }
type AA = {
    aa:string
} & BB
const aa:AA = {
    aa:'hi'
    bb:'hi'
}
```
2. 扩展方式：interface 可以重复声明用来扩展，但是 type 只能声明一次
```
interface A { a:string }    // 1.js
interface A { b:string }    // 2.js
const a:A = {
    a:'hi'
    b:'hi'
}

type A { a:string }    // 1.js
type A { b:string }    // 2.js 会报错
```
3. 范围不同：type 适用于基本类型，interface 一般不行
```
type UserName = string
interface UserName = string  //会报错
```
4. 命名方式：interface 会创建新的类型名，type 只是创建类型别名，并没有新创建类型。
```
type X = number
const x:X = 1
type Y = typeof x  // Y = number ，但是 Y === X 也是 true
```

# 第四问：TS 工具类型 Partial、Required、Readonly、Exclude、Extract、Omit、ReturnType 的作用和实现？
1. 将英文翻译为中文。
    - Partial 部分类型
    - Required 必填类型
    - Readonly 只读类型
    - Exclude 排除类型
    - Extract 提取类型
    - Pick/Omit 排除 key 类型
    - ReturnType 返回值类型
2. 举例说明每个工具类型的用法。