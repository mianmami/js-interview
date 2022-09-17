var combinationSum = function(candidates, target) {
  let result = [];
  let path = [0];
  backTracking()

  function backTracking(){
    let res = path.reduce((sum,item)=>sum+=item)
    if(res>target) return
    if(res==target) {
      result.push([...path].slice(1));
      return
    }

    for(let i=0; i<candidates.length; i++) {
      path.push(candidates[i])
      backTracking()
      path.pop()
    }
  }



  return result;
};