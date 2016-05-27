$(".changecolor .after").hide();
$(".changecolor").hover(function(){
	var beforesrc = $(this).find(".before").attr("src");
	var aftersrc = $(this).find(".after").attr("src");
	$(this).find(".before").attr("src",aftersrc);
	$(this).find(".after").attr("src",beforesrc);
	// console.log($(this).find(".before").attr("src"));
	$(this).find("span").addClass("active")
},function(){
	var beforesrc = $(this).find(".before").attr("src");
	var aftersrc = $(this).find(".after").attr("src");
	$(this).find(".before").attr("src",aftersrc);
	// console.log($(this).find("before").attr("src"));
	$(this).find(".after").attr("src",beforesrc);
	$(this).find("span").removeClass("active")
})
$(".changemap").click(function(){
	$(".map").toggle(".dis");
})
$(".mapbox li a").click(function(){
	var val = $(this).text();
	$(".changemap .change").text(val);
	$(".map").css("display","none");
})
$(".top .right .list").hover(function(){
	$(".top .top-inner .mune").css("display","block")
},function(){
	$(".top .top-inner .mune").css("display","none")
})

