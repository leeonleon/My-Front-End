# 《CSS权威指南》笔记

#### 选择器

* 类选择器：`.`
* ID选择器：`#`
* 属性选择器：`p[class] {color: red;}`所有含有`class`属性（不论值是什么）的`p`元素。
* 后代选择器：`h1 em {color: red;}`
* 选择子元素：`h1 > strong {color: red;}`直接父子关系
* 选择相邻兄弟元素：`h1 + p {margin-top: 0;}`只能选择两个相邻兄弟中的第二个元素。
* 伪类选择器：`a:hover {}`