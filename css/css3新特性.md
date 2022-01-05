## 动元素

transition可以让元素从一种样式逐渐切换到另一种样式

从左到右的语法：

- css属性/all
- 过渡花费的时间
- 效果曲线，默认是ease
- 延迟时间，默认是0

## 动画animation

从左到右的语法：

- 动画名称
- 动画持续时间
- 运动曲线，默认是ease
- 动画延迟，默认0
- 动画播放次数，默认是1

与之相关的css属性是@keyframes，动画帧，它的名字就是动画名称。

## 转换transform

这个属性允许我们旋转，缩放，倾斜或平移给定元素

- 平移translate
  transform: translate(x,y)

- 旋转rotate
  transform: rotate(旋转度数)

- 缩放scale
  transform: scale(x,y)

- 倾斜skew
  transform: skew(x, y)

## 阴影box-shadow

从左到右的语法

- insert，或者不写
- 水平阴影偏移量
- 垂直阴影偏移量
- 阴影模糊半径，默认0，值越大，模糊面积越大，阴影就越大越淡
- 阴影扩散半径，默认为0，取正值时，阴影扩大；取负值时，阴影收缩
- 阴影颜色

box-shadow不需要给出完整数量的值，有如下规则

1. 只给两个值，那么这两个值就是x和y偏移量的值
2. 只给三个值，那么在1的基础上，第三个值是阴影模糊半径
3. 只给四个值，那么在2的基础上，第四个值是阴影扩散半径
4. 颜色不计数，因为它能够识别颜色的取值。

如果对同一个元素添加多个阴影效果，需要使用逗号将每个阴影规则分开。

## 边框border

边框可是设置样式，图片，圆角

## 渐变

线性渐变、径向渐变

## 滤镜Filter

## 媒体查询

监听屏幕尺寸的变化
@media at-rule

在JS里面，可使用window.matchMedia()根据媒体查询测试窗口，或者使用MediaQueryList.addListener()在查询状态发送变化时收到通知。

## 布局

### 弹性布局

display: flex;
[跳转](Flex布局.md)

### 网格布局

display: grid;

### 多列布局

column-count: <number>;

## 背景background

### background-clip

指定背景绘制的区域，默认值是border-box，即从边框开始绘制。

- padding-box，从padding开始绘制，相当于把border那里的背景去掉了
- content-box，只在内容区绘制

### 混合模式background-blend-mode

允许我们使用多张背景图片，或者图片加背景颜色。

## 文字

### 换行

word-break：

- normal 使用浏览器默认的换行规则
- keep-all 只能在半角空格或者连字符处换行
- break-all 允许在单词内换行

word-wrap：

- normal 默认值
- break-all 对于non-CJK（中文、日文、韩文）文本，可在任意字符间换行
- keep-all 对于CJK文本不换行，Non-CJK文本表现同normal

### 省略

text-overflow

- clip 直接裁剪
- ellipsis 通过...代表被隐藏的文本
- string 只在火狐兼容

### 阴影

text-shadow:水平阴影 垂直阴影 模糊的距离 阴影的颜色。

## 颜色

- rgba

颜色值rgb+透明度a

- hsla

h色相、s饱和度、l亮度、a透明度。元素使用这个后，透明度只会在该元素有效，不会影响到后代元素。

## 其他

### 动画与过渡的区别

transition需要触发一个事件才会随着时间改变其CSS属性；animation在不需要触发任何事件的情况下，随时间变化来改变元素CSS属性，达到一种动画的效果。

