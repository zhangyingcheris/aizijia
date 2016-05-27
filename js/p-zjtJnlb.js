$(".mapbox li a").click(function(){
	var val = $(this).text();
	$(".sch-txt").val(val);
})
$(".search_ul li a").click(function(){
	var val = $(this).text();
	$(".sch-txt").val(val);
})
$(".after-zan").hide();
var val = $(".zan").next().text();
$(".zan").click(function(){
	var beforesrc = $(this).find(".before-zan").attr("src");
	var aftersrc = $(this).find(".after-zan").attr("src");
	$(this).find(".before-zan").attr("src",aftersrc);
	$(this).find(".after-zan").attr("src",beforesrc);

	if($(this).hasClass("liked")){
		val--;
		$(this).next().text(val);
		$(this).removeClass('liked');
	}else{
		val++;
		$(this).next().text(val);
		$(this).addClass('liked');
	}
})

$(".after-yzheng").hide();
var value = $(".yzclass").text();
$(".yzheng").click(function(){
	var besrc = $(this).find(".before-yzheng").attr("src");
	var afsrc = $(this).find(".after-yzheng").attr("src");
	$(this).find(".before-yzheng").attr("src",afsrc);
	$(this).find(".after-yzheng").attr("src",besrc);
	if($(this).hasClass("aaa")){
		value--;
		$(this).next().text(value);
		$(this).removeClass("aaa");
	}else{
		value++;
		$(this).next().text(value);
		$(this).addClass("aaa");
	}
})
//登录
$("#login-model").click(function(){
	$(".login-cover").css("display","block");
	$("#login").css("display","block");
});
//关闭模态框
$(".login-close").click(function(){
	$(".login-cover").css("display","none");
	$(".login-content").css("display","none");
});
//注册
$("#logup-model").click(function(){
	$("#logup").css("display","block");
	$(".login-cover").css("display","block");
});
//免费注册
$("#login-to-logup").click(function(){
	$("#login").css("display","none");
	$("#logup").css("display","block");
})
//登录正则表达式
$(".user-name").blur(function(){
	var textName = $(".user-name").val();
	var txtNamezz = /^([0-9]{11})$/;
	var reNa = txtNamezz.test(textName);
	// $(this).css("background-color","green");
	if(reNa){
		$(".yanzheng-name").html("√");
	}else if(textName==""){
		$(".yanzheng-name").html("请输入手机号");
	}else{
		$(".yanzheng-name").html("请输入正确格式");
	}
})
$(".user-pass").blur(function(){
	var txtPass = $(".user-pass").val();
	var textPasszz = /^([0-9]{6})$/;
	var reNa = textPasszz.test(txtPass);
	// $(this).css("background-color","green");
	if(reNa){
		$(".yanzheng-pass").html("√");
	}else if(txtPass==""){
		$(".yanzheng-pass").html("请输入密码");
	}else{
		$(".yanzheng-pass").html("密码不正确");
	}
})
//注册正则表达式
$(".logup-mail").blur(function(){
	var textVal = $(this).val();
	var textmailzz = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var reMa = textmailzz.test(textVal);
	if(reMa){
		$(".logup-yz-mail").html("√");
	}else if(textVal==""){
		$(".logup-yz-mail").html("请输入邮箱");
	}else{
		$(".logup-yz-mail").html("格式不正确");
	}
})
$(".logup-user").blur(function(){
	var textVal = $(this).val();
	var textNamezz = /^[0-9]{2}$/;
	var reNa = textNamezz.test(textVal);
	if(reNa){
		$(".logup-yz-user").html("√");
	}else if(textVal==""){
		$(".logup-yz-user").html("请输入用户名");
	}else{
		$(".logup-yz-user").html("格式不正确");
	}
})
$(".logup-pass").blur(function(){
	var textVal = $(this).val();
	var textPasszz = /^[0-9]{6}$/;
	var rePs = textPasszz.test(textVal);
	if(rePs){
		$(".logup-yz-pass").html("√");
	}else if(textVal==""){
		$(".logup-yz-pass").html("请输入密码");
	}else{
		$(".logup-yz-pass").html("请输入6位数字");
	}
})
$(".logup-paes").blur(function(){
	var textpass = $(".logup-pass").val();
	var textpaes = $(this).val();
	if(textpass==textpaes){
		$(".logup-yz-paes").html("√");
	}else{
		$(".logup-yz-paes").html("密码不匹配");
	}
})