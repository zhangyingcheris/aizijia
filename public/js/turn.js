$(".search a").click(function(){
	var val = $(".search input").val();
	if(val=="南京"){
		$(this).attr("href","yang2.html")
	}else if(val=="温泉"){
		$(this).attr("href","yang1.html")
	}else {
		console.log("暂时没有建立连接")
	}
})