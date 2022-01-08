---
title: BFC
date: 2021-07-14
categories: 
 - CSS
---

## 概述
BFC是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。在这个区域内有着一套渲染规则，决定其子元素如何布局，以及和其他元素之间的关系与作用。

规则
1. BFC区域内的元素外边距会发生重叠
2. BFC区域内的元素不会与浮动元素重叠
3. 计算BFC区域的高度时，浮动元素也会参与计算
4. BFC区域内的元素与外部元素互不干扰

## 触发条件
1. 根元素html
2. 浮动元素，即float：left/right
3. 设置overflow且值不为visible
4. 行内块元素，即display：inline-block
5. 弹性元素，即display：flex/inline-flex元素的直接子元素
6. 网格元素，即display：grid/inline-grid元素的直接子元素
7. 绝对定位元素，即position：absolute/fixed
8. 表格元素
9. ...

## 应用
1. 清除浮动：父元素设置overflow:hidden
2. 防止margin边距塌陷
3. 自适应两栏布局


## 外边距重叠计算方式
1. 全部是正值，则取最大值；
2. 有正值、有负值；则都取绝对值，用正值的最大值 — 绝对值的最大值；
3. 全部是负值，则都取绝对值，然后用0减去绝对值的最大值（0 - 最大绝对值）