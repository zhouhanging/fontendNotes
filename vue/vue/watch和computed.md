---
title: watch和computed
date: 2021-07-19
categories: 
 - vue系列
---

## computed
computed是计算属性的; 它会根据所依赖的数据动态显示新的计算结果, 该计算结果会被缓存起来。computed的值在getter执行后是会被缓存的。如果所依赖的数据发生改变时候, 就会重新调用getter来计算最新的结果。

如果依赖是对象又是怎样？

使用场景：购物车商品结算

### computed与methods的区别
1. computed 是基于响应性依赖来进行缓存的。只有在响应式依赖发生改变时它们才会重新求值,而methods不是响应式的
2. computed中的成员可以只定义一个函数作为只读属性, 也可以定义成 get/set变成可读写属性, 但是methods中的成员没有这样的


## watch
watch它是一个对data的数据监听回调, 当依赖的data的数据变化时, 会执行回调。在回调中会传入newVal和oldVal两个参数

搜索

## computed和watch的区别
相同点：他们两者都是观察页面数据变化的。

不同点：computed只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。
watch每次都需要执行函数。watch更适用于数据变化时的异步操作。