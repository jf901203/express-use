
module.exports=function (app) {
		// 用于指定不同的访问路径所对应的回调函数 这就叫做路由
	  app.get('/',function(req,res){
     res.end('first')
		})
		// 匹配上之后才去执行中间件
    app.get('/hello',function (req,res) {
        res.send('hello')
      })
		app.get('/mise',function (req,res) {
			res.send('mise')
		})  
		app.get('/home',function (req,res) {
			res.send('home')
		})  


  }