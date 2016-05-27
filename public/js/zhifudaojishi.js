			var oHour = document.getElementById('hour');
		var oMinute = document.getElementById('minute');
		var oSecond = document.getElementById('second');
		var time = [1,0,0]
		var hour = time[0];
		var minute = time[1];
		var second = time[2];
		function setTime() {
			second --;
			if (second < 0) {
				second += 60;
				minute --;
			}
			if (minute < 0) {
				minute += 60;
				hour --;
			}
			oHour.innerText = hour;
			oMinute.innerText = minute;
			oSecond.innerText = second;
			if (hour == 0 && minute == 0 && second == 0) {
				clearInterval(t);
				alert('时间到');
				console.log('时间到');   //时间倒计时事件
			}
		}
		var t = setInterval(setTime,1000);
		$('#paymoney').click(function() {
			if($('.forthc').hasClass('addclass') == false) {
				$('html,body').scrollTop(0);
				$('.forthc').addClass('addclass');				
			}else{
				alert('你已经支付完成，无需重复支付')
			}
		});

				//登录事件
		$('#login-model').click(function() {
			$('#login').css('display', 'block');
			$('.login-cover').addClass('alpha')
			$('#logup').css('display', 'none');
		});
		$('#login-close,.login-cover').click(function() {
			$('#login').css('display', 'none');
			$('.login-cover').removeClass('alpha')
		});
		//注册事件
		$('#logup-model').click(function() {
			$('#logup').css('display', 'block');
			$('.login-cover').addClass('alpha');
			$('#login').css('display', 'none');
		});
		$('#logup-close,.login-cover').click(function() {
			$('#logup').css('display', 'none');
			$('.login-cover').removeClass('alpha');
		});
		//立即注册
		$('#login-to-logup').click(function() {
			$('#login').css('display', 'none');
			$('#logup').css('display', 'block');
		});




		$(".daizhifu").click(function(){
			$(".h-zhifu").css("display","block").siblings().css("display","none")
		})
		$(".daichuxing").click(function(){
			$(".h-daichuxing").css("display","block").siblings().css("display","none")
		})
		$(".quanbudingdan").click(function(){
			$(".h-quanbudingdan").css("display","block").siblings().css("display","none");
			$(".jiazai").css("display","block")
		})
		$(".daipingjia").click(function(){
			$(".h-daipingjia").css("display","block").siblings().css("display","none")
		})
		$(".yiquxiao").click(function(){
			$(".h-yiquxiao").css("display","block").siblings().css("display","none")
		})             //第一个选项卡事件




		$('.pingjia img').click(function() {
			$(this).attr('src', 'images/assess-xing-click.png');
			$(this).prevAll('.pingjia img').attr('src', 'images/assess-xing-click.png');
			$(this).nextAll('.pingjia img').attr('src', 'images/assess-xing.png');
		});       //星级评价事件



			//正则验证
			var regemail=/^([0-9a-zA-Z]{6,10})\@([0-9a-zA-Z]{2,4})\.com$/;
			// var reg = /.+@(.+){2,}\.(.+){2,}/;
			$(".email").blur(function(){
				var str=$(".email").val();
				console.log(str);
				var result=regemail.test(str);
				console.log(result);
				if(result==true){
					$(".truea").css("display","block");
					$(".falseaa").css("display","none")
				}else{
					$(".falsea").css("display","block")
					$(".truea").css("display","none")
				}if(result==""){
					$(".shuru").css("display","none")
				}
			})

			var regname=/^[a-zA-Z0-9\u4e00-\u9fa5]{4,16}$/;
			$(".name").blur(function(){
				var str=$(".name").val();
				var result=regname.test(str);
				if(result==true){
					$(".trueb").css("display","block");
					$(".falseb").css("display","none")
				}else{
					$(".falseb").css("display","block")
					$(".trueb").css("display","none")
				}
			})

			var regset=/^[a-zA-Z0-9]{4,16}$/;
			$(".set").blur(function(){
				var str=$(".set").val();
				var result=regset.test(str);
				console.log(result);
				if(result==true){
					$(".truec").css("display","block");
					$(".falsec").css("display","none")
				}else{
					$(".falsec").css("display","block")
					$(".truec").css("display","none")
				}
			})

			var regpassword=/^[a-zA-Z0-9]{4,16}$/;
			$(".password").blur(function(){
				var str=$(".password").val();
				var result=regpassword.test(str);
				console.log(result);
				if(result==true){
					$(".trued").css("display","block");
					$(".falsed").css("display","none")
				}else{
					$(".falsed").css("display","block")
					$(".trued").css("display","none")
				}
			})

			var reginvitation=/^[a-zA-Z0-9]{4,16}$/;
			$(".invitation").blur(function(){
				var str=$(".invitation").val();
				var result=reginvitation.test(str);
				console.log(result);
				if(result==true){
					$(".truee").css("display","block");
					$(".falsee").css("display","none")
				}else{
					$(".falsee").css("display","block")
					$(".truee").css("display","none")
				}
			})





    //百度地图API功能
    function loadJScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=PGbgnOwOIr1FrQBkGIkViXXS&callback=init";
        document.body.appendChild(script);
    }
    function init() {
        var map = new BMap.Map("allmap",{minZoom:8,maxZoom:18});            // 创建Map实例
        var point = new BMap.Point(119.291921, 39.824546); // 创建点坐标
        map.centerAndZoom(point,18);
        setTimeout(function(){
        map.setZoom(15);
         }, 2000);//两秒后放大到15级


        map.disableDragging();     //禁止拖拽
        setTimeout(function(){
         map.enableDragging();
        }, 2000);    //两秒后开启拖拽


        map.enableScrollWheelZoom();//启用滚轮放大缩小

        // var pointA = new BMap.Point(106.486654,29.490295);  // 创建点坐标A--大渡口区
        // var pointB = new BMap.Point(106.581515,29.615467);  // 创建点坐标B--江北区
        // alert('从大渡口区到江北区的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。');  //获取两点距离,保留小数点后两位
        // var polyline = new BMap.Polyline([pointA,pointB], {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  //定义折线
        // map.addOverlay(polyline);//添加折线到地图上


        //在地图右上角添加缩放
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM});
        map.addControl(top_right_navigation);




///////定位控件
  var geolocationControl = new BMap.GeolocationControl();
  geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map.addControl(geolocationControl);





map.enableInertialDragging();
map.enableContinuousZoom();
var size = new BMap.Size(10, 20);
map.addControl(new BMap.CityListControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    offset: size,
    // 切换城市之间事件
    // onChangeBefore: function(){
    //    alert('before');
    // },
    // 切换城市之后事件
    // onChangeAfter:function(){
    //   alert('after');
    // }
}));





var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

        map.setCurrentCity("秦皇岛");          // 设置地图显示的城市 此项是必须设置的

}
    window.onload = loadJScript;  //异步加载地图



