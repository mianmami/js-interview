const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

/* 
利用Postman发起请求，需要提供json数据。
*/



const username = '123';
const password = '123';
const jwtSecret = '12346'

// 登录
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  console.log(req.body);
  if(req.body.username == username && req.body.password == password) {
    const token = jwt.sign(
      {name: 'huang'},
      jwtSecret,
      {algorithm: 'HS256', expiresIn: 10}
    )
    res.end(token);
  }else{
    res.send("账号密码错误")
  }
})

app.post("/vip", (req, res)=>{
  // 需要提前把token复制，并放在请求的json里面
  jwt.verify(req.body.token, jwtSecret, (err, decoded)=>{
    if(err){
      res.end("账号密码错误");
    }else{
      // 如果验证通过的话，会把{name: 'huang'}还原回来
      res.send(`welcome ${decoded.name}`)
    }
  })
})


app.listen(3001);