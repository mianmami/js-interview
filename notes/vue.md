
- [defineProperty的缺点 也是vue3 proxy监听的有点(等下再看)](#defineproperty的缺点-也是vue3-proxy监听的有点等下再看)
- [vue2和vue3的区别](#vue2和vue3的区别)
- [vue生命周期](#vue生命周期)
- [函数式组件比起class组件的优势是什么](#函数式组件比起class组件的优势是什么)
- [Vue中是怎么实现订阅者的?Vue中观察者模式和发布/订阅模式的区别和场景](#vue中是怎么实现订阅者的vue中观察者模式和发布订阅模式的区别和场景)
- [怎样理解VUE中的单向数据流](#怎样理解vue中的单向数据流)
- [vue父组件和子组件生命周期钩子的执行顺寻](#vue父组件和子组件生命周期钩子的执行顺寻)
- [在哪个生命周期钩子里调用异步请求](#在哪个生命周期钩子里调用异步请求)
- [vue3新特性](#vue3新特性)
- [前端性能的优化](#前端性能的优化)
- [Vue路径中的@是什么意思](#vue路径中的是什么意思)
- [虚拟DOM的好处,diff算法的原理](#虚拟dom的好处diff算法的原理)
- [vue中keep-alive](#vue中keep-alive)
- [computed和watch的区别](#computed和watch的区别)
- [导航守卫](#导航守卫)
- [为什么data要用函数](#为什么data要用函数)
- [css scoped样式穿透](#css-scoped样式穿透)
- [图片懒加载](#图片懒加载)
- [vue数据响应原理](#vue数据响应原理)
- [this.$set()使用场景](#thisset使用场景)
- [this.$nexttick使用场景 &nextTick作用，底层实现](#thisnexttick使用场景-nexttick作用底层实现)
- [push和replace区别 应该是路由切换那里的问题](#push和replace区别-应该是路由切换那里的问题)
- [路由的模式有哪几种](#路由的模式有哪几种)
- [v-for中为什么要有key](#v-for中为什么要有key)
- [为什么在vue的组件中，data要用function返回对象呢？](#为什么在vue的组件中data要用function返回对象呢)
- [v-for和v-if为什么不能连用](#v-for和v-if为什么不能连用)
- [route和router的区别](#route和router的区别)
- [v-show和v-if区别](#v-show和v-if区别)
- [路由懒加载](#路由懒加载)
- [路由组件传值的几种方式](#路由组件传值的几种方式)
- [简单说说对SPA单页面的理解，它的优缺点分别是什么](#简单说说对spa单页面的理解它的优缺点分别是什么)
- [路由传参的几种方式](#路由传参的几种方式)
- [什么是组件和模块](#什么是组件和模块)
# defineProperty的缺点 也是vue3 proxy监听的有点(等下再看)
# vue2和vue3的区别
# vue生命周期

# 函数式组件比起class组件的优势是什么
# Vue中是怎么实现订阅者的?Vue中观察者模式和发布/订阅模式的区别和场景  

# 怎样理解VUE中的单向数据流
# vue父组件和子组件生命周期钩子的执行顺寻
# 在哪个生命周期钩子里调用异步请求
# vue3新特性
# 前端性能的优化

# Vue路径中的@是什么意思
在Vue-cli中，@是src路径的别名。这样可以简化路径的写法，不用每次都从当前目录出发寻找某个文件.就不用一直写./  ../ 这种

# 虚拟DOM的好处,diff算法的原理

- diff算法是平级对比，一层一层，对应的位置和对应的位置
- 它是深度优先去遍历  
- 虚拟节点是一个对象{标签名，样式，子节点}
- 然后利用differ算法，进行新旧DOM对比
  - 如果新节点对应位置没有节点，就直接把原来的删除了
  - 如果新节点对应位置有节点，且是文本节点，且文本不一样，那就对文本进行替换
  - 如果新节点对应位置有节点，且是属性节点，那么就遍历属性节点的值，不一样就修改，没有的就添加进去
  - 如果遇到了子节点，那就开始递归遍历
  - 可以提一嘴：vue2用双指针遍历，vue3用最短子序列。。。。
# vue中keep-alive

- 有些页面可能经常要切换，所以不用经常创建和销毁，可以让他们驻留内存，加上了\<keep-alive>标签就可以了
- 他有一个include属性，因为keep-alive包裹的组件，下面的所有子组件，都会缓存，但是我只想让某些缓存，就可以给include赋值一个数组，然后只保留需要缓存的组件
- 针对组件的缓存，如果我想让组件切换的时候，进行一些操作，例如，把里面开的定时器关闭(不然，这个组件虽然没有展示，但是还在内存中，定时器就会一直开着，消耗资源)，vue提供了两个声明周期钩子，actived, deactived,就是在组件切换的时候，可以把逻辑写在这个里面
# computed和watch的区别

- computed它的实现原理是基于Object.definePreperty,根据getter,和setter来进行值的改变，是计算属性。watch是监听一个值变化时对应的回调，可以拿到原来的值，和最新的值，可以设置immediate开启首次就执行，还可以通过deep开启深度监听
- computed只会在页面首次加载的时候，和数据更新的时候执行一次，然后就把值缓存在了内存中。作为对比，通过methods方法，也可以返回计算属性的值，但是methods就得每次遇到计算属性，都要去调用，开销就变高了
- computed必要要把新值return，所以她不能处理异步的问题。


# 导航守卫
  - 全局路由守卫 router.beforeEach/afterleave((to,next,from))
  - 独享路由守卫 beforeEnter
  - 组件内路由守卫 beforeRouterEnter/leave

前置是需要达到条件，才能进入这个页面，后置是需要达到某个条件，才能离开这个页面(例如，点击了确认离开，再让你离开)

[参考资料](https://www.bilibili.com/video/BV15V411U7oN?spm_id_from=333.337.search-card.all.click&vd_source=60248c7c7bc979b113e0ac4403b63220)

[参考资料](https://m.php.cn/article/486386.html)

# 为什么data要用函数

- 组件可以复用，但是data不用复用。不然，一个地方更改，其他地方的数据都要进行修改。耦合性太高了。然后可以扯一下深拷贝，浅拷贝，堆内存，栈内存



# css scoped样式穿透
[参考资料](https://www.jb51.net/article/253428.htm)

# 图片懒加载

图片不用一次性加载完毕，随着滚动条的拉动，慢慢地加载图片

可以说自己学习Uniapp的时候，uniapp有内置指令 v-lazy

基本的思路就是要监听滚动区域是否进入视野，如果进入了，就开始把url赋值给image.src即可，就会发起请求，去下载图片

# vue数据响应原理

- 拿到数据，利用Object.definePreperty进行get,seter设计(看一下这个是怎么用的，千万不要用自身调用自身)，同时给每一个属性，都实例化对应的watch
- 拿到模板，去解析里面的元素节点，文本节点。元素节点里识别@click,v-model等，绑定监听的事件（这样页面的数据可以流向data）。解析的时候把对应的watch保存在dep依赖里面数据更新的时候，dep回通知对应的watch进行页面的重新更新(data数据可以流向页面)(dep依赖，就是理解为data被哪些html标签所依赖了, add方法，notify方法)等
- 由于Object.definePreperty不能给数组添加setter,getter，且只有初始化的数据能会自动添加getter和setter，所以才会有vue.$set()方法
- 对于数组，VUE对原来的数据进行了封装，在保留了原来数组方法的基础上，添加了页面更新的操作，但仅限于pop push shift unshift reverse sort splice
- 还要注意，this.$set只能给data里已经有的属性值里的内容，添加数据，不可以重新定义一个数据
- 为什么vue3要用Proxy取代Object.defineProperty，因为Object.defineProperty不能给数组添加get set(整个数组变化检测到，但是数组里的内容变化，检测不到)，即`监听不到数组的更新！！！！！`
- ProxyIE9以下都不兼容，Object.definePropertyIE8以下都不兼容

`这些可以回答Vue双向绑定，响应式原理，this.$set, 为什么数组的增加和删除可以引起页面的更新`
```js
let oldArrayProto = Array.prototype
    
let newArrayProto = Object.create(oldArrayProto)
let arr = ['push', 'pop']
arr.forEach(methodName => {
  newArrayProto[methodName] = function () {
    // 重新调用老原型的方法
    oldArrayProto[methodName].call(this, ...arguments)
    // 添加新原型功能，并视图的更新
    console.log('我在更新视图');
  }
})

// 测试
let array = [1, 2, 3, 4]
array.__proto__ = newArrayProto
array.push(5)
console.log(array);
```

[参考资料](https://www.bilibili.com/video/BV1Z7411d7mf?p=2&vd_source=60248c7c7bc979b113e0ac4403b63220)

[参考资料](https://www.bilibili.com/video/BV1VA411x76D?p=4&vd_source=60248c7c7bc979b113e0ac4403b63220)





# this.$set()使用场景

```js
	Vue监视数据的原理：
  1. vue会监视data中所有层次的数据。（对象里套对象，都会被检测到）

  2. 如何监测对象中的数据？
          通过setter实现监视，且要在new Vue时就传入要监测的数据。
            (1).对象中后追加的属性，Vue默认不做响应式处理
            (2).如需给后添加的属性做响应式，请使用如下API：
                    Vue.set(target，propertyName/index，value) 或 
                    vm.$set(target，propertyName/index，value)

  3. 如何监测数组中的数据？
            通过包裹数组更新元素的方法实现，本质就是做了两件事：
              (1).调用原生对应的方法对数组进行更新。
              (2).重新解析模板，进而更新页面。
            因为数组没有配置getter, setter方法，所以修改数组需要利用4中提到的方法。

  4.在Vue修改数组中的某个元素一定要用如下方法：
        1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
        2.Vue.set() 或 vm.$set()

        注意：4.1中提到的方法，都会对原数组进行改变。如果遇到filter, concat等不会引起数组改变的方法，可以通过暴力赋值的方法解决
        this.student.hobby = this.student.hobby.filter((h)=>{
          return h !== '抽烟'
        })

  
  特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象(vm._data) 添加属性！！！，只能给它里面的Obj添加。
        即可以直接：vm.gender = 'male'   不可以 Vue.set('vm', 'gender', 'male')
```

- 如果一开始对象上，没有属性

# this.$nexttick使用场景 &nextTick作用，底层实现

- Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。改数据是同步代码，带式视图的更新是异步的
- 1 数据修改
- 2.数据更新视图的watch进队(重复的不用进去)
- 3.watch内部，也会调用Nexttick来进行promise封装
- 4.遇到自己的nexttick
- 5.watch的异步操作，在自己定义的Nexttick之前，所以就可以解决了

[参考资料](https://www.bilibili.com/video/BV1ke4y1D7xv?spm_id_from=333.337.search-card.all.click&vd_source=60248c7c7bc979b113e0ac4403b63220)

# push和replace区别 应该是路由切换那里的问题

[参考资料](https://blog.csdn.net/qq_39364032/article/details/85774636)

# 路由的模式有哪几种

  [参考资料](https://blog.csdn.net/weixin_62930485/article/details/123491635)
  [参考资料](https://www.bilibili.com/video/BV1ba4y1s7Ra/?spm_id_from=333.788.recommend_more_video.-1&vd_source=60248c7c7bc979b113e0ac4403b63220)
  如果选用了history模式，需要后端配置，全部都重定向到Index.html(我理解就是出现404错误，就都跳转回首页) 这个可以回答`history模式中前后端是如何合作的`吗？？？


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



















