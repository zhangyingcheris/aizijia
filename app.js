var express=require("express");
var fs=require("fs");
var bodyParser=require("body-parser");
var app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");

// app.get("/sign",function(req,res){
// 	fs.readFile("data/userlist.json","utf8",function(err,data){
// 		var userlist=JSON.parse(data);
// 		console.log(userlist);
// 		var obj=req.query;
// 		for (var i in userlist){
// 			if(userlist[i].username==obj.username&&userlist[i].password==obj.password){
// 				res.redirect("/personalpage");break;
// 				// res.redirect("/我的订单.html");break;
// 			}else{
// 				res.send("登录失败")
// 			}
// 		}
// 	})
// })


//后台登录验证
app.post("/sign",function(req,res){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var userlist=JSON.parse(data);
		var obj=req.body;
		var result = true;
		for (var i in userlist){
			console.log(userlist[i]);
			console.log(obj);
			if(userlist[i].username==obj.username&&userlist[i].password==obj.password){				
				res.redirect("/personalpage");
				break;
			}
		}
	})
})


//后台注册
app.get("/register",function(req,res){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		var userlist=JSON.parse(data);
		var obj=req.query;
		var bool = false;
		for(var i in userlist){
			if(userlist[i].email==obj.email){
				res.send("该邮箱已被注册")
			}else{
				bool = true;
			}
		}
		if(bool){
			userlist.push(obj);
		}
		var newArr=JSON.stringify(userlist,null,2)
		fs.writeFile("data/userlist.json",newArr);
		res.send("注册成功")
	});
})


app.get("/personalpage",function(req,res){
	res.render("personalpage")
})
app.post("/personalpage",function(req,res){
	res.render("personalpage")
})
// app.get("/我的订单.html",function(req,res){
// 	res.render("/我的订单.html")
// })





app.listen(3000);
console.log("服务器启动成功")
