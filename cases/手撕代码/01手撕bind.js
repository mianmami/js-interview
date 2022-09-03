Function.prototype.myCall = function(obj, ...arr){
  obj.fn = this // 就是原来调用的函数
  let res = obj.fn(...arr);
  delete obj.fn // 再删除掉
  return res
}
Function.prototype.myCall = function(obj, arr){
  obj.fn = this // 就是原来调用的函数
  let res = obj.fn(...arr);
  delete obj.fn // 再删除掉
  return res
}

Function.prototype.myBind = function(obj, ...arr){
  obj.fn = this
  return function(){
    let res = obj.fn(...arr);
    delete obj.fn // 再删除掉
    return res
  }
}


function fn(a,b,c){
  console.log(this, a, b, c);
}
fn.myBind({name: 'huang'}, 1,2,3)()