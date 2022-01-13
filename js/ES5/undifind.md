# 关于undifind
### undifind相关
- undifind是js的原始值，也是window的全局属性
- undifind 
  - writable	false
  - enumerable	false
  - configurable  false
- 可能在非全局作用域中被当作标识符（变量名）来使用，因为undefined并不是一个保留字
```js
var x;

if (x === undefined) {
// 执行这些语句
} else {
// 这些语句不会被执行
}
```
- 未赋值变量和undefined严格相等

```js
// 这里没有声明y
if(typeof y === 'undefined') {       // 没有错误，执行结果为true
   console.log("y is " + typeof y )  // y is undefined
}

if(y === undefined) {                // ReferenceError: y is not defined

}
```


