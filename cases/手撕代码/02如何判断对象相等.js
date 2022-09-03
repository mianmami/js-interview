let obj1 = {name: 'huang', age: {address: 'beij'}}
let obj2 = {name: 'huang', age: {address: 'beij'}}
function cmp(obj1, obj2){
  if(Object.keys(obj1).length != Object.keys(obj2).length) return false
  for(let key in obj1){
    if(!(key in obj2)) return false
    //  二普通  一普通，一对象  二对象
    let v1 = obj1[key], v2 = obj2[key]
    if(typeof v1 != 'object' && typeof v2 != 'object' && v1 != v2) return false
    if(typeof v1 != 'object' && typeof v2 == 'object') return false
    if(typeof v1 == 'object' && typeof v2 == 'object') {
      if(!cmp(v1, v2)) return false
    }
  }
  return true
}


let arr = [1, "a", {b: 2},  {b: 2}, "1", "a", {c:3},]
arr = [...new Set(arr)]; // 只能给普通的数据类型去重
for(let i=0; i<arr.length; ++i){
  if(typeof arr[i] != 'object') continue
  for(let j=i+1; j<arr.length; ++j){
    if(typeof arr[j] != 'object') continue
    if(cmp(arr[i], arr[j])){
      arr.splice(j, 1)
    }
  }      
}
console.log(arr);

console.log(toString.call([1,2,3])); // 直接t0String也是可以调用的