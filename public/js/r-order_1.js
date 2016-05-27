$(".sign").click(function(){
	var sign = $(this).text();
	var num = Number($(".num").text());
	if(sign == "+"){
		var result=num + 1
	}else{
		var result=num - 1
		if(num<=1){
			return $(".num").text(1)
		}
	}
	$(".num").text(result)
	$(".room").text(result)
	$(".money").text(result*5400)
})

$(".ex-list1>li").click(function(){
	var index = $(this).index();
	$(this).children().css("display","block");
	$(this).siblings().children().css("display","none");
	$(this).addClass("border-top").siblings().removeClass("border-top");
	$(".ex-box>div").eq(index).css("display","block").siblings().css("display","none");
})

var flname = /^[\u4e00-\u9fa5]+$/;
var phone = /0?(13|14|15|18)[0-9]{9}/;
var email =  /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
var id = /\d{15}|\d{18}/;
var empty = /\s/;
$(".flname").blur(function(){
	if(!flname.test($(this).val()) && ($(this).val().length == 0)){
		$(this).siblings().text("不能为空");
	}else if(!flname.test($(this).val())){
		$(this).siblings().text("请输入正确格式");
	}else{
		$(this).siblings().text("");
	}
})

$(".phone").blur(function(){
	if(!phone.test($(this).val()) && ($(this).val().length == 0)){
		$(this).siblings().text("不能为空");
	}else if(!phone.test($(this).val())){
		$(this).siblings().text("请输入正确格式");
	}else{
		$(this).siblings().text("");
	}
})
$(".phone2").blur(function(){
	if(($(this).val().length == 0) && (!phone.test($(this).val()))){
		$(this).siblings().text("");
	}else if(!phone.test($(this).val())){
		$(this).siblings().text("请输入正确格式");
	}else{
		$(this).siblings().text("");
	}
})

$(".email").blur(function(){
	if(!email.test($(this).val()) && ($(this).val().length == 0)){
		$(this).siblings().text("不能为空");
	}else if(!email.test($(this).val())){
		$(this).siblings().text("请输入正确格式");
	}
	else{
		$(this).siblings().text("");
	}
})

$(".flname2").blur(function(){
	if(!flname.test($(this).val()) && ($(this).val().length == 0)){
		$(this).next().text("不能为空");
	}else if(!flname.test($(this).val())){
		$(this).next().text("请输入正确格式");
	}else{
		$(this).next().text("");
	}
})

$(".id").blur(function(){
	if(!id.test($(this).val()) && ($(this).val().length == 0)){
		$(this).next().text("不能为空");
	}else if(!id.test($(this).val())){
		$(this).next().text("请输入正确格式");
	}else{
		$(this).next().hide();
	}
})

$(".confirm").click(function(){
	var checked=$(this).is(":checked")
	if(checked == true){
		$(".submit").css("background","#50bbdb")
	}else{
		$(".submit").css("background","#cccccc")
	}
})



$(".bgi").click(function(){
	var idName ="#"+$(this).attr("name");
	$(".bgi").attr("class","bgi") && $(this).attr("class","bgi checked");
	$("input[name='agree']").removeAttr("checked") && $(idName).attr("checked","checked");
})


$("input[name='is']").click(function(){
	var txt = $(this).next().text();
	console.log(txt)
	if(txt == "是"){
		$(this).parent().parent().siblings().show();
	}else if(txt == "否"){
		$(this).parent().parent().siblings().hide();
	}
})



