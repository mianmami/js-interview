var repeatedSubstringPattern = function(s) {
  function fn(str, s) {
       
      if(s.length % str.length != 0) return false
      let step = s.length / str.length
      if(str == 'abc') console.log(str);
      for(let i=0; i<step; ++i){
        
          if(s.slice(i*str.length, (i+1)*str.length) != str) return false
          
      }
      return true
  }

  for(let i=0; i<s.length; ++i){
      let substr = s.slice(0,i+1)
      let res = fn(substr, s)
      
      if(res) return true        
  }
  return false
};

repeatedSubstringPattern('abcabcabcabc')