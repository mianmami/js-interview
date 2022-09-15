// var lengthOfLongestSubstring = function(s) {
//   let i = 0, j = 1, max=-1;
//   let curStr = s.slice(0,1)
//   while(j<s.length) {
//     if(curStr.indexOf(s[j]) != -1){
//       //出現了重複的字符串
//       max = Math.max(max, curStr.length)
//       i = j
//       curStr = s.slice(i, j+1)
//       j++
//     }else{
//       //沒有出現，直接添加
//       curStr = s.slice(i, j+1)
//       max = Math.max(max, curStr.length)
//       j++
//     }
//   }  
//   return max
// };

// lengthOfLongestSubstring('aaaa')



var lengthOfLongestSubstring = function(s) {
  let i = 0, j = 0, max=0, curStr='';
  while(j<s.length) {
    if(curStr.indexOf(s[j]) != -1){ 
      i = s.indexOf(s[j], i) + 1
    }
    j++
    curStr = s.slice(i, j)
    console.log(curStr);
    max = Math.max(max, curStr.length)
  }
  
  return max
  
};

lengthOfLongestSubstring('abcabcbb')