var str5 = '这是一段字符串，需要替换的内容为"aa和bb"！';
var newStr = str5.replace( /([a-z])/g,function (arg1,arg2,arg3,arg4){
  console.log( arg1 );
 
 
} );

