## 关于object.defineProperty
### 对象
ECMAScript中有两种属性:数据属性和访问器属性。对于数据属性，有以下四个特性描述期行为
- [ [configurable]]:表示能否通过delete 删除属性从而重新定义属性，能否修改属性的特
性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为true.
- [ [ Enumerable]]:表示能否通过for-in 循环返回属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为trueo
- [ [writable]]:表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为true。
- [ [value]]:包含这个属性的数据值。读取属性值的时候，从这个位置读;写入属性值的时候，把新值保存在这个位置。这个特性的默认值为undefined。

###  object.defineProperty
`使用方法`
> 接收三个参数:属性所在的对象、属性的名字和一个描述符对象。
```js
var person = {};
object.defineProperty (person, "name" , {
    writable: false,
    value:"hello"
});
alert(person.name);//hello
person.name = "Greg " ;
alert(person.name) ;//hello"
```
### 访问器属性
[ [Get] ]:在读取属性时调用的函数。默认值为undefined。

[ [Set]]:在写人属性时调用的函数。默认值为undefined。

> 访问器属性不能直接定义，必须使用objectde.defineProperty()来定义



### 注意
- 一旦吧属性定义为不可配置的，就不能再把它变回可配置了。

