- [js代码有问题，编译器是如何识别报错的](#js代码有问题编译器是如何识别报错的)
- [js事件循环机制](#js事件循环机制)
- [箭头函数和普通函数的区别](#箭头函数和普通函数的区别)
- [Commonjs和es6模块的区别](#commonjs和es6模块的区别)
- [实现深拷贝](#实现深拷贝)
- [数据类型有哪些](#数据类型有哪些)
- [instanceof如何实现](#instanceof如何实现)
- [如何实现数组去重](#如何实现数组去重)
- [js如何判断数据类型](#js如何判断数据类型)
- [typeof 的用法](#typeof-的用法)
- [ES6 set的底层实现原理](#es6-set的底层实现原理)
- [构造函数中new在执行时都做了哪些事情？](#构造函数中new在执行时都做了哪些事情)
- [this的指向问题，如何修改this的指向, 箭头函数能否实例化？](#this的指向问题如何修改this的指向-箭头函数能否实例化)
- [讲一下E6类和继承](#讲一下e6类和继承)
- [js原生的绑定点击事件](#js原生的绑定点击事件)
- [Generator/Iterator/Async/Await](#generatoriteratorasyncawait)
- [原型链](#原型链)
- [如何判断一个数据是数组类型](#如何判断一个数据是数组类型)
- [闭包](#闭包)
- [let const var区别](#let-const-var区别)
- [深拷贝和浅拷贝](#深拷贝和浅拷贝)
- [什么是JS垃圾回收机制](#什么是js垃圾回收机制)
- [Object .is 和 == 和 === 有什么区别](#object-is-和--和--有什么区别)
- [数组Api](#数组api)
- [Map Api](#map-api)
- [Set API](#set-api)
- [ObjectAPi](#objectapi)

# js代码有问题，编译器是如何识别报错的

# js事件循环机制

# 箭头函数和普通函数的区别

# Commonjs和es6模块的区别

# 实现深拷贝

# 数据类型有哪些

# instanceof如何实现  

# 如何实现数组去重

```js
1. [...new set(arr)]

2.利用indexof/includes
let arr = [1,1,2,2];
let res = [];
for(let i=0; i<arr.length; i++) {
  if(res.indexOf(arr[i])==-1){
    res.push(arr[i])
  }
}
console.log(res);

3.利用排序+重复的数字是挨着的特点
let arr = [1,2,2,4,4,5,2,1,3]
arr.sort((a,b)=>a-b)
let res = [];
for(let i=0; i<arr.length; ++i){
  if(arr[i-1]!=arr[i])
  res.push(arr[i]) // arr[-1]=undefined
}
console.log(res);

4.filter+index
let arr = [3,2,3,3,2,2,5,5,1,1,1];
let out = arr.filter(function(val,idx){
  return arr.indexOf(val) == idx // 找到第一个就返回了他的索引
})
console.log(out);

```

# js如何判断数据类型
[参考资料](https://blog.csdn.net/m0_61700036/article/details/122753556)

# typeof 的用法
[参考资料](https://blog.csdn.net/hong521520/article/details/106640616/)

`为什么 typeof null == Object`

因为js初始版本中，值以32位进行存储。前三位表示数据的类型，例如Number,String等。其他的作为值。Null一开始被认为是特殊值，对用着C语言的指针。但是js又没有指针，所以Null就意味着什么都没有，就以全0表示而000就是对象的标志，所以就有个这个结论。并一直沿用至今。

# ES6 set的底层实现原理
主要是利用对象，利用对象的key是唯一的特点，实现set中集合的唯一性，其中用到了对象的一些重要API：

    1.obj.hasOwnProperty(xx):判断对象身上是否有某种属性
    2.Object.keys() Object.values()
    3.del Obj.item 删除某个属性值(会把属性一起删除了)
Map的实现方式好像和set一样？

[参考资料](https://github.com/XPoet/js-data-structures-and-algorithms/blob/master/assets/doc/08_JavaScript%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%EF%BC%88%E5%85%AB%EF%BC%89%E9%9B%86%E5%90%88.md)

# 构造函数中new在执行时都做了哪些事情？

- 创建一个对象
- 将函数中的this指向这个对象
- 为对象添加具体的属性和方法
- return 这个对象 
  
```js
function Person(name, age){
  // let obj = {}
  // let this = obj
  this.name = name;
  this.age = age
  this.say = function(){
    
  }
  return this
}
let p = new Person('huang', 18)
console.log(p);
```
以上的构造函数写法有一个缺点，say函数直接定义在了实例的身上，没有起到复用的作用。所以可以用`Person.prototype.say=function(){}`来进行优化

补充：`创建对象的方式`
```js
let obj1 = {
  name: 'huang',
  say: function(){}
};
let obj2 = new Object();
```

# this的指向问题，如何修改this的指向, 箭头函数能否实例化？

1.作为函数方法直接调用
```js
function show(){
  console.log(this) // window
}
function show(){
  "use strict"
  console.log(this) // undefined
}
```

2.被作为方法调用
```js
let obj = {
  fn1(){
    console.log(this)  
  },
  fn2: ()=>{
    console.log(this)
  }
}
obj.fn1() // obj
obj.fn2() // 箭头函数没有自己的this,跟随父级作用域的this,所以这里是window
``` 

3.bind apply call 可以修改this指向
```js
let obj = {name: 'huang'}
function test(a, b){
  console.log(this, a, b);
}
test(1,2) // 直接调用，输出window, 1, 2
test.bind(obj, 1, 2)() // test内部的this此时就指向obj, 输出obj, 1, 2。注意bind后得到的是一个函数，需要再次调用，call/apply直接调用即可
test.call(obj, 1, 2) // obj, 1, 2
test.apply(obj, [1, 2]) // obj, 1, 2
```


`注意：箭头函数不能实例化，因为箭头函数没有自己的this`

# 讲一下E6类和继承
```js
class Person{
  constructor(name, age){
    this.name = name // 实例属性
    this.age = age // 实例属性
    this.fn1 = function(){} // 实例方法
  }
  gender = 'male' // 实例属性(construct里面要写this, 外面不用写)
  fn2 = function(){} // 实例方法
  fn3(){} // 注意：这里的这个写法，不是实例方法，而是原型方法
  static a = 1 // 静态属性，挂在构造函数上
  static fn4(){} // 静态方法，挂在构造函数上
  
}
let p = new Person('huang', 18);
console.log(p);
// console.dir(Person);

class Student extends Person{
  // 重写父元素的值
  constructor(name, age, test){
    super(name, age)
    this.test = test
  }

}
let stu = new Student('zhang', 19)
console.log(stu); 
// 父元素实例属性+方法，子元素都可以访问，而原型方法则通过原型链访问
// 通过super()对父元素的属性进行修改
// 同名的方法，会对父元素进行重写(也可以理解为覆盖？？)
```

# js原生的绑定点击事件

```md
一共四种方法, 
btn1.addEventListener('click', function) 兼容性比第二种高
btn2.attachEvent('onclick', function)
btn3.onclick = function
<button onclick="fuction()"> 注意引号里面要执行
```
# Generator/Iterator/Async/Await
[参考个人笔记](https://blog.csdn.net/mianmami/article/details/126203755?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22126203755%22%2C%22source%22%3A%22mianmami%22%7D&ctrtid=4A0mP)

# 原型链
![image](../images/00008.png)

注意：Array这些构造函数，都是由Function函数的实例化对象！！！！

# 如何判断一个数据是数组类型

`1-Array.isArray(arr)`

`2-arr instanceof Array/Object`
  - instanceof 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

`3-arr.constructor.name == 'Array'` function的话是Function, 普通对象的话是Object,数字是Number等等，这样也是可以判断的

`4-Object.prototype.toString.call(arr)=='object array'`
  - 注意：数组身上也有个toString，这两个是不一样的, 这个是对象原型上的
  - 传入普通obj -> '[object Object]'
  - 传入数组 -> '[object Array]'
  - 出入数字 -> '[object Number]'
  - 传入字符串 -> '[object String]'等


`typeof arr == 'object'` 注意：这个只能判断数据类型，并不能判断具体是不是数组

# 闭包

我们需要一种机制：既能长期保存遍历，又不会污染全局的环境，这就是闭包

满足闭包的条件：

 - 函数里嵌套函数
 - 内部函数引用外部函数的变量
 - 返回值是这个函数(或者这个函数要被调用)
 - 创建一个函数对象，让它驻留内存(或者这个函数要被调用)

回答的时候可以扯一下执行函数，进栈出栈的过程，但是使用了闭包那个遍历，不会被垃圾回收机制所清理

只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境也不会被清除，它的内部变量就始终保存着当前值，供闭包读取。

```js
function addFn() {
	let count = 0
	return () => {
		return count++
	}
}
let add = addFn()
console.log(add()) // 0
console.log(add()) // 1
console.log(add()) // 2
```
`经典题目`
```js
for (var i = 0; i < 5; ++i) {
  setTimeout(() => {
    console.log(i++);
  }, 0)
}
console.log(i);  // 5 5 6 7 8 9

for (var i = 0; i < 5; ++i) {
  (function (i) {
    setTimeout(() => {
      console.log(i++);
    }, 1000)
  })(i)
}
console.log(i);  // 5 0 1 2 3 4
```
# let const var区别

- var可以重复定义，let不可以重复定义, const不可以重复定义，const赋值一个常量，一旦被赋值，这个数据不可以改变(对象的话，内容在改变，但是内存地址并没有变化)
- var关键字可以进行变量声明提升，即可以先使用，后定义。例如var a = 1, 等同于 var a; a = 1。let/const不可以进行声明提升
- 全局、局部、块级作用域。在块级{}作用域中，let/const定义的变量是独享的,var定义的变量还是全局变量。这个应用在for循环里很明显，var i = 1， 然后里面有异步操作会报错哦(不是你想要的结果)！！！`参考闭包的内容`

# 深拷贝和浅拷贝
[参考资料](https://www.jb51.net/article/192518.htm)

# 什么是JS垃圾回收机制

`为什么需要垃圾回收`

  内存容量有限，没有被使用的数据占用内存，会造成资源浪费

`什么是垃圾回收 （GC：Garbage Collection）`

JS的垃圾回收机制是为了以防内存泄漏，内存泄漏的含义就是当已经不需要某块内存时这块内存还存在着，没有被释放，导致该内存无法被使用，垃圾回收机制就是间歇的不定期的寻找到不再使用的变量，并释放掉它们所指向的内存。

`垃圾回收的策略`

- 引用计数算法。统计某块内存的数据是否被引用，被引用就+1，例如a = 3, b = a。那么数据3这块内存就被引用了2次，就不清除。如果后来赋值：a=null, b=null。那么这块内存就要被垃圾回收机制所回收了
- 标记清除算法。比较粗暴，循环所有内存判断是否是垃圾，是就标记1，就清除，否则就标记为0.

`引起内存泄漏的原因`

- 定义的全局变量
- 定义的闭包
- dom清空或删除时，事件未清除导致的内存泄漏
- 
[参考资料](http://t.zoukankan.com/fightjianxian-p-11973234.html)

# Object .is 和 == 和 === 有什么区别

 - == 是比较运算符，但是它不管数据类型，如果数据类型不相同，会进行类型强制转换
 - === 是进行严格比较，如果类型不一致就会报错
 - === 有些值判断不了，例如+0和-0， Nan
 - Object用法类似于 ===, 都是用来判断严格相等，主要是对有一些值进行了处理
  
  ```js
  // 一些例子
  null == undefined // true
  +0 == -0 // true
   +0 === -0 // true
  NaN == NaN // false Nan和任何数字比较都是false
  Object(NaN, NaN) // true
  Object(+0, -0) // false
  ```
  [参考资料](https://blog.csdn.net/weixin_47450807/article/details/123085255)

# 数组Api

`Arry.at(index)`
  - 等同于Array[index]，返回索引值
  - 有点就是index可以传入负值，表示从后往前索引，从-1开始
  
`Array.concat()`
  - console.log([1,2,3].concat([4,5,6], [7, 8 , 9])); 
  - 可以接收多个参数，用逗号隔开，原数组不会改变
  
`Arr.copyWithin`
  - 将数组中一段数据，复制到另一个位置
  ```js
  const arr = [1,2,3]
  console.log(arr.copyWithin(2, 0, 1));
  // 第一个参数：目标位置的起点
  // 第二个参数：复制的起点
  // 第三个参数: 复制的终点
  // 将[0,1)的数据，复制到2开始的位置，结果[1,2,1]
  ```
  `Array.entries`

  `Array.every(fn)`

  如果所有元素都满足条件，返回true, 否则返回false

  ```js
  const arr = [1,2,4]
  const res = arr.every(function(item){
    return item < 4
  })
  console.log(res); // false
  ```

  `Array.fill`

  - 赋值一样的元素，会覆盖原数组
  - Array.fill(0)


  `Array.filter`

筛选符合条件的元素
  ```js
  const arr = [1,2,4]
  const res = arr.filter(item=>item>=2)
  console.log(res); // [2, 4]
  ```
`Array.map`

map可以对数据进行一些操作，这和filter形成了对比
```js
const arr = [1,2,4]
const res = arr.map(item=>item*2)
console.log(res); // [2, 4, 8]
```

`Array.find Array.findLast`

获取第一个满足条件的元素
```js
const arr = [1,2,4]
const res = arr.find(item=>item>=2)
console.log(res); // 2
```

`Array.findIndex Array.findLastIndex`

获取第一个满足条件的元素的索引

```js
const arr = [1,2,4]
const res = arr.findIndex(item=>item>=2)
console.log(res); // 1
```

`Array.splice(index, howmany, item1, ....., itemX)`

index: 从哪里开始

howmany: 要不要删除几个元素，如果是0， 表示不删除

itemX: 要添加的元素

返回值是删除的元素，会修改原来的数组

```js
var fruits = ["Banana", "Orange", "Apple", ];
fruits.splice(1, 0, "Mango"); 
console.log(fruits); // ['Banana', 'Mango', 'Orange', 'Apple']

fruits.splice(1,2) // 表示删除从序号为1开始(包括1)，删除往后的2个元素
```

`Array.reduce((acc, cur, idx, src) => {}, initialValue)`
```js
// acc表示初始值，如果传入了initialValue, 那么acc = initialValue, 否则 acc表示数组的第一个值
// 常用于数组的累计求和
let arr = [1,2,3,4,5]
let res = arr.reduce((sum, cur)=> sum += cur, 0)
console.log(res); // 15
```
`Array.some(fn)`

只要有一个元素满足条件，就返回true, 否则返回false

```js
let arr = [1,2,34];
let res = arr.some(item=>item==1)
let res1 = arr.some(item=>item==3)
console.log(res); // true
console.log(res1); // false
```

`Array.entries() Array.keys() Array.values()`

ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个迭代器对象，可以用for...of循环进行遍历(直接输出是看不见的)，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

```js
let arr = [7, 6, 5, 4, 3, 2, 1];
for(let [key, value] of arr.entries()){
  console.log(key, value);
}

for(let key of arr.keys()){
  console.log(key);
}

for(let value of arr.values()){
  console.log(value);
}
```
如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
```js
let arr = [7, 6, 5, 4, 3, 2, 1];
let values = arr.values();
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
```

`Array.forEach`

`Array.includes`: true/false

`Array.indexof Array.lastIndexof`: 找到返回索引值，没有就返回-1

`Array.join(char)`：用`char`串联

`Array.pop Array.push shift unshift`

`Array.toString()` [1,2,3] => "1,2,3" 逗号会保留

`array.slice(start, end)`: 晒选数组的元素

`Array.reverse()`: 返回反转后的数组，不改变原来的值

`Array.sort()`: 对数组进行排序


# Map Api

Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

`创建map`

```js
let mp = new Map([['name','huang'], ['age', 18]]) 

// 键的数据类型也可以是对象
const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content') // Map(1) { { p: 'Hello World' } => 'content' }

// set转为map
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') // 1
```
- Map可迭代
- 对相同键盘键连续赋值两次，后一次的值覆盖前一次的值。

- 如果读取一个未知的键，则返回undefined。

- 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
  
`mp.has() mp.get() mp.set() mp.delete() mp.clear() mp.size `

`mp.keys() mp.valud() mp.entries() mp.forEach()`

`for...of...`
```js
let mp = new Map([['name','huang'], ['age', 18]])
for(let [key, value] of mp){
  console.log(key, value);
}
```
`Array <--> Map`
```js
let mp = new Map([['name','huang'], ['age', 18]]) // arr -> map
let arr = [...mp] // mp -> arr
```

`Set <---> Map`
```js
let mp = new Map(new Set([['name','huang'], ['age', 18]], ['age', 18])) // set -> Map
let st = new Set(...)
```

`Object <---> Map`
```js
// Map -> Obj
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

// Obj -> map
let map = new Map(Object.entries(obj));
```


# Set API

set类似于数组，map类似于对象

`set.add()/set.delete()/set.has()/set.size/set.clear()`

`set.keys()/set.values()/set.entries()/set.forEach()`

`for...of...也可以用，因为可迭代`

```js
let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value)) 
// 这里key和value是一样的 都是  1 4 9 ,不要以为key是索引。。。。。
```

`数组去重` arr = [...new Set(arr)]

```js
let arr = [1,1,2,2,3,3];
console.log([...new Set(arr)]); // [1,2,3]
```
`实现并集/交集/差集`
```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
console.log(new Set([...a, ...b])); // 并集{1,2,3,4}
console.log([...a].filter(val=>b.has(val))); // 交集 [2,3]
console.log([...a].filter(val=>!b.has(val))); // 差集 [1]
```

`如果想在遍历操作中改变原来的Set解构，可以有以下两种方法`
```js
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```

`weakSet weakMap`

- 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。WeakMap的键只能是对象
- WeakSet持弱引用：集合中对象的引用为`弱引用`。 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着 WeakSet 中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的。
- 由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

```js
let map = new Map();
let wmap = new WeakMap();

(()=>{
  let obj = {name: 'huang'}
  let obj1 = {name: 'huang'}
  map.set(obj, 1)
  wmap.set(obj1, 1)
})()

setInterval(function(){
  console.log(map, wmap);
},1000) // 过一段时间 wmap中的obj1键就被回收了,可以等待看一下结果
```

# ObjectAPi

`obj.hasOwnProperty`:只判断是否是自身的属性，是返回true, 继承过来的返回false



`Object.create(prototype)` :必须要传入一个原理对象，表示继承自谁，例如Object.create(Array.prototype)





`如何判断是不是对象`

 - typeof XX == 'object'

assign: ƒ assign()
create: ƒ create()
defineProperties: ƒ defineProperties()
defineProperty: ƒ defineProperty()
entries: ƒ entries()
freeze: ƒ freeze()
fromEntries: ƒ fromEntries()


getPrototypeOf: ƒ getPrototypeOf()
hasOwn: ƒ hasOwn()
is: ƒ is()
isExtensible: ƒ isExtensible()
isFrozen: ƒ isFrozen()
isSealed: ƒ isSealed()
keys: ƒ keys()

























































































































