- [1rem、1em、1vh、1px各自代表的含义？](#1rem1em1vh1px各自代表的含义)
- [媒体查询如何实现，移动端适配如何实现？](#媒体查询如何实现移动端适配如何实现)
- [双飞翼布局 圣杯布局（左右定宽，中间自适应是怎么实现的，有什么方法 实现css三栏布局，中间固定，两边自适应](#双飞翼布局-圣杯布局左右定宽中间自适应是怎么实现的有什么方法-实现css三栏布局中间固定两边自适应)
- [画一个三角形](#画一个三角形)
- [一些不熟悉的css样式](#一些不熟悉的css样式)
- [谈谈对有关于常用的flex属性的方法](#谈谈对有关于常用的flex属性的方法)
- [谈谈grid布局常用的属性](#谈谈grid布局常用的属性)
- [居中的方式](#居中的方式)
- [清除浮动的方式](#清除浮动的方式)


# 1rem、1em、1vh、1px各自代表的含义？

 - em： 等于当前这个元素内部的字体大小，字体默认是16px, 那么1em = 16px
 - rem: 在根节点设置了一个font-size = XX,那么全局 1rem = XX。rem和em都是相对的单位，会随着字体大小而变化
 - 1vw: 表示当前屏幕宽度的1% ， 1vh：当前屏幕高度的1%
 - vmin: vw和vh中较小的那个
 - vmax: vw和vh中较大的那个 这两个可以用于屏幕旋转的时候保持尺寸不变

`物理像素`：就是实际的像素点，有多少个空格

`逻辑像素`：是人为设定的，例如苹果手机逻辑像素宽度方向才300多，但是实际的物理像素却有800多。所以1个逻辑像素会对于多个物理像素，可以理解了图片放大，就失真了。

`视口`：现在屏幕的宽度假设是375，但是视口默认是980， 所以页面放不下，一个视口，而如果强行放下的话，为了让页面全部显示，就会缩放。这样也是不合理的。所以后来就引入了meta标签，去定义一些属性值来约束视口，例如有属性 content="width=device-width initial-scale等

`目前比较常用的做法`：先把视口设置为和屏幕宽度大小一样，此时，如果按照原来设计稿的尺寸肯定是放不下的。然后可以通过rem来进行缩放。最后，就是逻辑像素和物理像素的问题，就可以通过initial-scale来对整个视口进行缩放

`当然还有一些比较简单的做法`，例如，直接通过媒体查询，或者不管屏幕大小，始终保持字体、图片大小，但是给最外层的容器添加flex布局，让整体可以进行伸缩。

[参考资料](https://www.bilibili.com/video/BV1Gu411o7CP?spm_id_from=333.337.search-card.all.click&vd_source=60248c7c7bc979b113e0ac4403b63220)


# 媒体查询如何实现，移动端适配如何实现？

[媒体查询](https://blog.csdn.net/dream_lifes/article/details/122013152)


# 双飞翼布局 圣杯布局（左右定宽，中间自适应是怎么实现的，有什么方法 实现css三栏布局，中间固定，两边自适应

  - 圣杯三个平级，用padding挤
  - 双飞翼center里面包一个，用margin挤，这个更加好写 注意，float之间的maring，是可以覆盖上去的
  - 看文件夹里的案例


# 画一个三角形
由于边框具有宽度，且在边框的交界处会有45°的夹角，所有可以将不想显示的border的颜色设置为transparent即可。

[参考资料](https://blog.csdn.net/weixin_43900271/article/details/114637983)

# 一些不熟悉的css样式
```js
letter-spacing: 一句话每个词语之间的间距
```

# 谈谈对有关于常用的flex属性的方法
`flex-direction`: row/column/row-reverse/column-reverse<br>
`flex-wrap`: wrap/no-wrap<br>
`justify-content`: flex-start/flex-end/center/space-between/space-around/space-evenly<br>
`align-items`: flex-start/flex-end/center/baseline/center<br>
`align-content`: 当有多行排布的时候，例如设置了换行，就会多出来好几行
  - flex-start:几行并在一起，位于开头
  - flex-end: 几行并在一起，位于结尾
  - space-between/space-aroud/stretch类似
  
`flex-grow`:  设置给子元素，按照比例分配<br>
`flex-shrink`：设置给子元素，按照比例分配<br>
`flex-basis`:效果等同于 width=XXXpx<br>
```js
flex是flex-grow, flex-shrink, flex-basis的缩写
felx: 0: 表示 flex: 0 1 auto  不够不扩充，超过了缩放
flex: 1: 表示 flex: 1 1 auto  自动扩充
```

# 谈谈grid布局常用的属性
![image](../images/00006.png)
最外层是container, container里面包含content(网格区域)， conteng里是一块块area, 每一块area里面有item, 每一块area之间有gap

`grid-template-colums grid-template-rows`:设置长宽分为几行几列 

  ```js
  除了上面的写法，还有一些特殊写法
  - grid-template-columns: repeat(3, 100px); 每一行放三个，每个的宽度是100px
  - grid-template-columns: 100px auto 100px; auto自动充满空余区域
  - grid-template-columns: repeat(auto-fill, 100px); 按照盒子的大小，直到布满，再顺延到第二行
  - grid-template-columns: repeat(4, 1fr); 按照盒子的大小，宽度平均分成4份  那如果是1：2：3呢？  grid-template-columns: 1fr 2fr 3fr
  - grid-template-columns: 1fr minmax(150px, 1fr) ： 表示最小是150px, 最大是1fr。效果就是，当页面>=300px的时候，那么两列平均分，小于300px的时候，第二列保持150px，第一列在减小
  ```

  `row-gap, column-gap, gap` : 行间距，列间距，统一写法(第一个参数表示行，第二个参数表示列)

  `grid-auto-flow: column/row`: 设置area的排列方式(沿着row还是column方向)

  `grid-auto-columns grid-auto-rows`:设置超出content返回的元素的尺寸

  `justify-items align-items`:设置item的布局 start/end/center/strech

  `justify-content align-content`: 设置content布局 start/end/center/strech/space-between/space-around/space-evenly

  以上是设置在container类上，以下属性设置给具体的item

  `grid-colunm-start grid-column-end grid-row-start grid-row-end`： 从第几根轴到第几根轴，简写 grid-column: 1 / 3: 从第一根轴到第三根轴

  `grid-area`: 终极简写; grid-area: 1 / 3 / 2 / 4  column方向从1到2， row方向从3到4(是错开的)

  `align-self justify-self`: 单独定义自己的展示方式，可以覆盖align-items justify-items

  具体的演示可以参考自己整理的html文件
  
  总结以下：flex和grid都是对一个容器内的元素进行布局，flex只有主轴和侧轴，grid则类似于栅格布局
 
# 居中的方式

`行内元素水平居中`: text-align: center

`行内元素垂直居中`: line-height: 设置为和父元素高度一致即可

`块级元素水平居中`: margin: 0 auto

`块级垂直水平居中`: 

  - 子绝父相 + left/top: 50% + marigin-left/margin-top: 元素本身宽高的一半(需要知道儿子的宽高)
  - 子绝父相 + left/top: 50% + transform: translate(-50%)
  - 子绝父相 + left/top/bottom/right: 0 + margin: auto
  - 父元素不设置宽高，子元素通过padding撑开父元素
  - 弹性盒布局:  display： flex + justity-content: center + align-items: center(这里，这里display: grid也是行的)

# 清除浮动的方式
- 父元素没有设置高度，子元素设置为浮动，导致父元素高度塌陷。所以最直接的方式是给父元素一个高度
- 给父元素设置overflow: hidden/auto
- 在原来的子元素下方再加入一个子元素，并设置clear: both。即清除左边的浮动元素，又清除右边的浮动元素
- 现在比较常用的：原理和3是一样的，就是通过伪类元素，来虚拟地添加一个高度为0，内容为空的元素(最为推荐哦)



































