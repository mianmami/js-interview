- [构造函数中new在执行时都做了哪些事情？](#构造函数中new在执行时都做了哪些事情)
- [this的指向问题，如何修改this的指向, 箭头函数能否实例化？](#this的指向问题如何修改this的指向-箭头函数能否实例化)
- [讲一下E6类和继承](#讲一下e6类和继承)
- [js原生的绑定点击事件](#js原生的绑定点击事件)
- [数组Api](#数组api)

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

  `Array.every`

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

`Array.forEach`

`Array.includes`: true/false

`Array.indexof Array.lastIndexof`: 找到返回索引值，没有就返回-1

`Array.join(char)`：用`char`串联

`Array.pop Array.push shift unshift`

`Array.toString()` [1,2,3] => "1,2,3" 逗号会保留



































































































































