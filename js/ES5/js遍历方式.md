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

### for of

> for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。
```
let arr = [
    {id:1, value:'hello'},
    {id:2, value:'world'},
    {id:3, value:'JavaScript'}
]
for (let item of arr) {
  console.log(item); 
}
// 输出结果：{id:1, value:'hello'}  {id:2, value:'world'} {id:3, value:'JavaScript'}
```

- for of 方法只会遍历当前对象的属性，不会遍历其原型链上的属性；
- for of 方法适用遍历 数组/ 类数组/字符串/map/set 等拥有迭代器对象的集合；
- for of 方法不支持遍历普通对象，因为其没有迭代器对象。如果想要遍历一个对象的属性，可以用 for in 方法；
- 可以使用break、continue、return来中断循环遍历；

### filter()

> filter()方法用于过滤数组，满足条件的元素会被返回。它的参数是一个回调函数，所有数组元素依次执行该函数，返回结果为true的元素会被返回，如果没有符合条件的元素，则返回空数组。

该方法的第一个参数为回调函数，是必传的，它有三个参数：

- currentValue：必须。当前元素的值；
- index：可选。当前元素的索引值；
- arr：可选。当前元素属于的数组对象。

```
let arr = [1, undefined, 2, null, 3, false, '', 4, 0]
arr.filter(Boolean)

// 输出结果：[1, 2, 3, 4]
```
- filter 方法会返回一个新的数组，不会改变原数组；
- filter 方法不会对空数组进行检测；
- filter 方法仅适用于检测数组。



