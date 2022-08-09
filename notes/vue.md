- [路由组件传值的几种方式](#路由组件传值的几种方式)
- [简单说说对SPA单页面的理解，它的优缺点分别是什么](#简单说说对spa单页面的理解它的优缺点分别是什么)
- [路由传参的几种方式](#路由传参的几种方式)
- [什么是组件和模块](#什么是组件和模块)

# vue双向绑定原理

# vue数据响应原理

# vue2和vue3的区别

# 虚拟DOM的好处

# diff算法的原理
# vue中keep-alive
# computed和watch的区别
# defineProperty的缺点， 为什么数组的增加和删除会引起页面的更新

# 为什么data要用函数

# 导航守卫

# vue生命周期

# css scoped样式穿透

# 路由/图片懒加载

# this.$set()使用场景

# this.$nexttick使用场景 &nextTick作用，底层实现

# push和replace区别 应该是路由切换那里的问题

# 路由的模式有哪几种

  [参考资料](https://blog.csdn.net/weixin_62930485/article/details/123491635)
  [参考资料](https://www.bilibili.com/video/BV1ba4y1s7Ra/?spm_id_from=333.788.recommend_more_video.-1&vd_source=60248c7c7bc979b113e0ac4403b63220)
  如果选用了history模式，需要后端配置，全部都重定向到Index.html(我理解就是出现404错误，就都跳转回首页)


# v-for中为什么要有key
- DOM的更新遵循复用的原则，即通过diff算法进行新、旧DOM的比较。就是根据这个key值.如果是相同的，那就直接复用原来的，如果不同，那就重新创造。这样可以减少渲染次数，提高渲染性能
- 这个key最好不要用遍历的序列，而是因该用数据的唯一标识。否则很有可能造成数据的错位现象。比如跟着一个Input标签。我们输入了内容进去，但是在虚拟DOM中，它都表示为Input标签。当我们逆序插入的时候，就会发现数据的错位现象。

# 为什么在vue的组件中，data要用function返回对象呢？
[参考资料](http://wjhsh.net/tinging-p-13060074.html)

# v-for和v-if为什么不能连用
[参考资料](https://blog.csdn.net/yu_yu_lll/article/details/125352389)

# route和router的区别
- router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。通常用来进行路由的跳转 $router.push $router.replace
- route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等



# v-show和v-if区别

1.共同点：都能控制元素的显示和隐藏。

2.不同点：实现本质⽅法不同，v-show本质就是通过控制css中的display设置为none，控制隐藏，只会编译⼀次；v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。⽽且v-if不停的销毁和创建⽐较消耗性能。

3.总结：如果要频繁切换某节点，使⽤v-show(切换开销⽐较⼩，初始开销较⼤)。如果不需要频繁切换某节点使⽤v-if（初始渲染开销较⼩，切换开销⽐较⼤）。


# 路由懒加载

 - 首次加载的时候，不会下载全部的js文件，而是下载部分需要渲染的文件，等切换到对应的路径的时候，再下载对应的文件。这就是路由懒加载，
 - 写法就是用webpack提供的require, 给component配置选项，配置一个返回Promise对象的函数，就可以定义路由懒加载， components : ()=>require(路径) require函数就是webpack提供的，可以返回promise，所以就这么写

[参考资料](https://www.bilibili.com/video/BV1wC4y1t7b8?spm_id_from=333.337.search-card.all.click&vd_source=60248c7c7bc979b113e0ac4403b63220)



# 路由组件传值的几种方式

`1-props`
  - 传递普通变量：父->子传递数据
  - 传递函数：子->父传递数据
  - prop 只读，不可被修改，所有修改都会失效并警告。

`2-自定义事件`

- 实现子->父传递数据
```html
<button @myEvent="myEvent"> // 父
```

```js
myEvent(data){

} // 父

this.$emit('event', data) // 子
```
`3-全局事件总线`

- 任意组件通信

```js
beforeCreated(){
  Vue.prototype.$bus = this
}
this.$bus.$emit('event', data) // 父
this.$bus.$on('event',(data)=>{}) // 子

```

`4-v-model也可以用于组件间通信`

v-model 是 v-bind='value' 和 @input自定义事件的语法糖

```html
<Detail v-model='testData'></Detail> // 父
<button @click='handleClick'>点击更改父亲的数据</button>
```
```js
data(){
  return{
    testData: 0
  }
} // 父

export default {
  name: 'Detail',
  props: ['value'], // 1.接收value
  methods: {
    handleClick(){
      this.$emit('input', this.value + 2) // 2.自定义的input事件
    }
  }
} // 子


```
`5-vuex`

`6-.sync`

.sync的写法和v-model类似，但是一个组件里只能有一个v-model，但是可以有多个.sync,它也是语法糖

```html
<Detail :testData.sync='testData'></Detail> // 父组件
<button @click='handleClick'>点击我发送数据</button> // 子组件
```

```js
data(){
  return{
    testData: 0
  }
}// 父组件

export default {
  name: 'Detail',
  props: ['testData'], // 定义Props
  methods: {
    handleClick(){
      this.$emit('update:testData', this.testData + 2) // 定义自定义函数
    }
  }
} // 子组件
```

`7-ref, $children, $parent`

ref获取当前组件元素， children获取儿子，parent可以获取父亲

`8-作用域插槽`
  
  - 默认作用域插槽: n对m的关系，会出来n*m个结果

```html
<!-- 父组件 -->
<Detail>我是内容1</Detail>
<Detail>我是内容2</Detail>
<Detail>我是内容3</Detail>

<!-- 子组件 -->
<slot></slot>
```
- 具名作用域插槽： n对n的关系，会出来n个结果

```html
<!-- 父 -->
<Detail>
  <div slot='slot1'>我是内容1</div>
  <div slot='slot2'>我是内容2</div>
</Detail>

<!-- 子 -->
<slot name='slot1'></slot>
<slot name='slot2'></slot>
```
- 作用域插槽(父子之间都可以传递)

```html
<!-- 父 -->
<Category title="游戏">
  <template slot-scope="{games}">
    <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
  </template>
</Category>

<!-- 子 -->
<slot :games="games" msg="hello">我是默认的一些内容</slot>
```




# 简单说说对SPA单页面的理解，它的优缺点分别是什么

`优点`
 - 良好的交互式体验，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
 - 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理。(以前是服务器需要返回页面的Html代码)，写起来比较混乱
  
`缺点`

- 初次加载耗时多，为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载（可以使用路由懒加载解决），因为展现的时候是通过路由，让DOM树的内容，部分显示，部分隐藏。所以一开始需要加载的东西，有点多。。。。
- 由于单页应用在一个页面中显示，所以不可以使用浏览器自带的前进后退功能，想要实现页面切换需要自己进行管理
- SEO 难度较大，由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

[参考资料](https://blog.csdn.net/m0_58447769/article/details/121325225)

# 路由传参的几种方式

注意：有关路由的内容，需要引入VueRouter插件

可以简单总结为三种
  - query显式传参
  - params显式传参
  - params隐式传参

`声明式路由导航`

```html
<router-link to='/home'>home</router-link> <br>
<router-link to='/shop'>shop</router-link>
<router-view></router-view>
```
- query 参数

```html
<router-link :to="{
  path: '/home',
  query:{
    name: 'huang'
  }
}">home</router-link>

<router-link :to='/home?name=huang'></router-link> <!-- 这样写也可以 -->
<!-- 在home组件里，就可以调用this.$route.query拿到这个参数对象了！！！ -->
```
- params参数
  
```html
<!-- 注意：对象里用的是name, 不能用path， 而query则是两者都可以，除此之外，还可以再router/index.js中通过占位符的方法，把参数标记出来，见下方js代码 -->
<router-link :to="{
  name: 'home',
  params:{
    name: 'huang', 
    age: 18
  }
}">home</router-link>
<router-link :to="/home/huang/18"> <!-- 这样写也可以，不过路由表一定要占位去接收了,就默认是显示传参了 -->
```
```js
/* 
query进行传参的时候，是直接把参数通过问号拼接在url的后面 /home?name=huang
params进行传参分为两种，一种是在地址后面添加参数，一种是不添加
不添加：/home
添加：/home/huang/18  需要在router/index.js自己灵活配置
query: 可以用path/name, params只能用name

*/
[
  {
    name: 'home',
    path:'/hom/:name/:age',  // 也可以简单的  path: '/home' 也可以
    component:Home
  }
]
```

`编程式路由导航`

`this.$router.push() this.$router.replace() 参数写法和声明式一样`




# 什么是组件和模块

`组件`：用来实现局部功能的代码和资源的集合(html/css/js/image等等)

`模块`：向外提供特定功能的js程序，一般就是一个js文件



















