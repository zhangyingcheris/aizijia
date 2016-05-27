var reg=/^[\u4e00-\u9fa5]{3,7}$/;
$("#name").blur(function(){
	var val=$(this).val();
	var result=reg.test(val);
	/*if(result){
		$(".n-g").css("display","block").siblings("display","none");

	}else{
		$(".n-r").css("display","block").siblings("display","none");
	}*/
	console.log(result);
	if(result){
		$(".n-g").text("格式正确").css("color","green");
	}else{
		$(".n-g").text("格式错误").css("color","red");
	}
})
var rega=/^[0-9-()（）]{7,18}$/;
$("#phoneNumber").blur(function(){
	var val=$(this).val();
	var result=rega.test(val);
	console.log(result);
	if(result){
		$(".p-g").text("格式正确").css("color","green");
	}else{
		$(".p-g").text("格式错误").css("color","red");
		}
})
var regb=/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
$("#email").blur(function(){
	var val=$(this).val();
	var result=regb.test(val);
	console.log(result);
	if(result){
		$(".e-g").text("格式正确").css("color","green");
	}else{
		$(".e-g").text("格式错误").css("color","red");
		}
})
// (function bgc(){
// 	$("li").click(function fun(){
// 	$(this).addClass("trip").siblings().removeClass("trip")
// 	})
// })();

$("#trip").click(function(){
	$(this).css("background-color","#50bbdb").siblings().css("background-color","#fff")
})
$("#private").click(function(){
	$(this).css("background-color","#50bbdb").siblings().css("background-color","#fff")
})
$(".trip1").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	console.log("1")
});