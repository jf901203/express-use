
var express=require('express')
// express框架建立在nodejs内置的http模块上
/*
 var app=require('http')
//  创建一个服务器实例
// createServer()该方法接受一个回调函数
// 该回调函数的参数 分别是代表http请求的req对象
// http响应的res对象
 var app=http.createServer(function(req,res){
     res.writeHead(200,'ok')
     res.send('sssssss')
 }) 
 app.listen(3000)


 */
// express框架的核心是对http模块的在包装
// 创建一个express实例
var app=express()
console.log(app)
// Express.Router是一个构造函数 返回路由器实例
var router=express.Router()
// 引入路由模块
var routes=require('./routes')(router)
// use方法是注册中间件的方法 返回的是一个函数
// app.use('/path', someMiddleware); 只有请求路径匹配这个参数，后面的中间件才会生效
// 中间件就是处理http请求的和响应的函数
// 即http请求都会至少对应一个中间件
app.use('/',router)
app.listen(5000)