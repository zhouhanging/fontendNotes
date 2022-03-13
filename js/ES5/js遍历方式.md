## js遍历方式

### forEach()

> forEach 方法用于调用数组的每个元素，并将元素传递给回调函数。数组中的每个值都会调用回调函数。

```
let arr = [1,2,3,4,5]
let arr1 = [9,8,7,6,5]
arr.forEach(function(item, index, arr){
  console.log(this[index])  //  9 8 7 6 5
}, arr1)
```

- forEach 方法不会改变原数组，也没有返回值；
- forEach无法使用 break，continue 跳出循环，使用 return 时，效果和在 for 循环中使用 continue 一致；
- forEach 方法无法遍历对象，仅适用于数组的遍历。

### map()

> map() 方法会返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。该方法按照原始数组元素顺序依次处理元素。其语法如下：

```
let arr = ['a', 'b', 'c'];
[1, 2].map(function (e) {
    return this[e];
}, arr)
// 输出结果： ['b', 'c']
```
- map 方法不会对空数组进行检测；
- map 方法遍历数组时会返回一个新数组，不会改变原始数组；
- map 方法有返回值，可以return出来，map的回调函数中支持return返回值；
- map 方法无法遍历对象，仅适用于数组的遍历。
