


# 什么是盒模型
html页面中任何一个元素都可以叫做盒子，它规定了元素本身和元素之间的相互关系.盒模型由内到外可以分为：content,padding,border,margin.

box-sizing有常用的两个属性
  - border-box: width和height包含padding和border, 设置了这个属性的盒模型也叫`ID盒模型`
  - content-box: width和height就是内容content的宽高，设置了这个属性的盒模型也叫`标准盒模型`

几个概念
  - 内容高度：content宽高
  - 元素高度：content+padding+border
  - 元素空间高度：content+padding+border+margin

# e.target和e.currentTarget的区别
备注：如果要监听input框的变化，同时拿到里面的数据，可以用e.detail.XX来进行获取
![image](../images/00001.png)