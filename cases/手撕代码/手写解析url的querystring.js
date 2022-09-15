
let str = 'https://www.baidu.com?name=huang&age=18'

function parseUrl(url) {
  let params = url.split("?")[1].split("&")
  console.log(params.length);
  return params.reduce((obj, item) => {
    let [key, value] = item.split("=")
    obj[key]=value
    return obj
  }, {})
}


let res = parseUrl(str)
console.log(res);