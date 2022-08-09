const express = require("express");
const sessions = require("express-session");
const app = express();

username = "123";
password = "123";





// 挂载中间件
app.use(sessions({
  secret: 'secret', // 设置给name属性的值，即cookie签名
  name: 'huang', // 默认是connct.sid
  cookie: {maxAge: 15000},
  resave: false,
  saveUninitialized: false,
}))

// 登录

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  // console.log(req.body);
  if (req.body.username == username && req.body.password == password) {
    
    // 把用户的名字保存到了session,重定向的时候就可以找到
    session_DB = req.session;
    session_DB.username = req.body.username;
    console.log(`服务器生成新的session对象，当前的会话的唯一ID，藏在cookie的value里，值为${req.sessionID}`);
    res.end(`
      <h1>welcome ${session_DB.username}</h1>
      <a href="/logout">EXIT</a>
    `);
  }else{
    res.end("password or username is wrong!")
  }
})

// 登出
app.get("/logout", (req, res)=>{
  req.session.destroy(); // 服务器的session被删除。但是客户端的需要随着时间流逝删除(好像关系页面也消失了)
  console.log(`用户登出，当前的session内容为${req.session}`);
  res.redirect("/");
})

// 重定向需要的页面
app.get("/", (req, res)=>{
  console.log("用户访问了页面");
  if(req.session.username){
    // 如果还能找到这个用户
    res.end(`
      <h1>welcome ${req.session.username}</h1>
      <a href="/logout">EXIT</a>
    `);
  }else{
    res.sendFile(__dirname + '/index.html');
  }
})

app.listen(4000);