---
title: Flex 布局
date: 2021-07-15
categories: 
 - CSS
---

## 基本概念
Flexible Box模型是一种一维的布局模型。它给flexbox的子元素之间提供了强大的布局分布和对齐能力。

flex布局有两根轴线——主轴和交叉轴。主轴由flex-direction定义，另一根轴垂直于它。

该模型由css属性`display: flex`控制。

## Flex 容器
文档中采用了display:flex/inline-flex的元素叫做flex容器。容器中的直系子元素为flex元素。所有CSS属性都会有一个初始值，因此flex元素都会有下列行为：
- 元素排列一行（flex-direction默认值为row）
- 元素从主轴的起始线开始
- 元素不会在主维度方向拉伸，但是可以缩小
- 元素被拉伸来填充交叉轴大小
- flex-basis默认值为auto
- flex-wrap默认值为nowrap

## 容器属性
#### flex-direction

该属性决定主轴的方向，取值范围
1. row
2. row-reverse
3. column
4. column-reverse。

#### flex-wrap

如果flex元素太大而无法全部显示在一行，通过设置`flex-wrap: wrap`或者`flex-wrap: wrap-reverse`来实现多行效果。

#### flex-flow

这个属性是上面两个属性的简写形式，默认是`row nowrap`。

#### justify-content
这个属性定义了flex元素在主轴上的对齐方式，取值
1. flex-start 左对齐（默认值）
2. flex-end 右对齐
3. center 居中
4. space-between 两端对齐，flex元素之间间隔相等
5. space-around 每个flex元素两侧的间隔都相等，而且这个间隔比flex元素与边框的间隔大一倍

#### align-items
这个属性定义项目在交叉轴上如何对齐，取值
1. flex-start 交叉轴的起点对齐
2. flex-end 交叉轴的终点对齐
3. center 交叉轴的中点对齐
4. baseline：flex元素的第一行文字的基线对齐
5. stretch：默认值，如果flex元素高度auto或没设置，将会占满整个容器的高度

#### align-content
这个属性定义了多个轴线的对齐方式，如果flex元素只有一根轴线，那这个属性不会生效。

1. flex-start 与交叉轴的起点对齐
2. flex-end 与交叉轴的终点对齐
3. center 与交叉轴的中点对齐
4. space-between 与交叉点两端对齐
5. space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
6. stretch 默认值，轴线占满整个交叉轴

## Flex元素属性
#### order
这个属性定义flex元素的排列顺序。数值越小，排列越靠前，默认值0。

#### flex-grow
定义flex元素的放大比例，默认值0，即如果存在剩余空间，也不会放大。如果所有flex元素的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个flex元素的flex-grow属性为2，其他flex元素都为1，则前者占据的剩余空间将比其他项多一倍。

#### flex-shrink
定义flex元素的缩小比例，默认值1，即如果空间不足，flex元素会缩小。如果所有flex元素的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个flex元素的flex-shrink属性为0，其他flex元素都为1，则空间不足时，前者不缩小。

负值对该属性无效。

#### flex-basis
定义了在分配多余空间之前，flex元素占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即flex元素的本来大小。

它可以设为跟width或height属性一样的值（比如350px），则flex元素将占据固定空间。

#### flex属性
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。



#### align-self
允许单个flex元素有与其他flex元素不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。