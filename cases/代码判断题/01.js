// async function async1(){
//   console.log(2, 'async1 start');
//   let res = await async2(); // 关键就是这里，因为
//   console.log(5,'async1 end');
// }

// async function async2(){
//    console.log(3, 'async2');
//   //  await 1 
// }
// console.log(1,'script start');
// async1()

// setTimeout(function(){
//   console.log(7, 'setTimeout');
// }, 0)

// new Promise(function(resolve){
//   console.log(4,'promise1');
//   resolve()
// }).then(function(){
//   console.log(6,'promise2');
// })

/* 
1.因为async1的执行在最后一个Promise的前面，所以会等await async2()后面执行完毕，才会执行
.then中的内容。
2.如果没有await 1，那么5会先执行，再执行6。如果有了await 1,那么6会先执行，再执行5。我是这样理解的
本来，await async2 排在了 .then的前面。但是没想到里面又遇到了await,所以先跳离环境，await 1就写在了 .then的后面

3.注意：await中的同步内容，是可以马上执行的。就类似于Promise中的同步内容，因为async本质返回的就是一个Promise
*/


new Promise(function (resolve) {
  console.log(1, 'promise1'); 
  new Promise(function (resolve) {
    console.log(2, 'promise1');
    new Promise(function (resolve) {
      console.log(3, 'promise1');
    })
  })
  new Promise(function (resolve) {
    console.log(4, 'promise1');
  })
})

console.log('start');

// 虽然用了层层的promise，但是都是同步代码哈。.then中的内容，才是异步代码！！！





// Promise.resolve().then(function(){
//   console.log('promise1');  //1
//   setTimeout(()=>{
//     console.log('setTimeout2');//4
//   }, 0)
// })

// setTimeout(()=>{
//   console.log('setTimeout1'); //2
//   Promise.resolve().then(function(){
//     console.log('promise2'); //3
//   })
// })

// console.log('start');

/* 
先把第一组函数中then的回调，放在callback queue中(微任务直接丢进去)
再把第二组setTimeout回调，放在web Apis中
先执行1,遇到了4，放入到web Apis中，此时callback queue中已经没有东西了。且4是排在最后面的
第二组函数的倒计时到了，执行2，执行3，发现是个微任务，直接执行3，最后执行4

重点在于,整个Promise先要放到队列中，而不是马上执行。所以start是先调用的
*/




