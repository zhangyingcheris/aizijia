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
				console.log('时间到');
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




			$('.h-forth .yuan').click(function() {
			$(this).attr('src', 'images/hhh-lan.jpg');
			$(".h-fifth .yuan").attr('src', 'images/hhh-kong.jpg')
			$(".h-sixth .yuan").attr('src', 'images/hhh-kong.jpg')
		});
		$('.h-fifth .yuan').click(function() {
			$(this).attr('src', 'images/hhh-lan.jpg');
			$(".h-forth .yuan").attr('src', 'images/hhh-kong.jpg')
			$(".h-sixth .yuan").attr('src', 'images/hhh-kong.jpg')
		}); 
		$('.h-sixth .yuan').click(function() {
			$(this).attr('src', 'images/hhh-lan.jpg');
			$(".h-forth .yuan").attr('src', 'images/hhh-kong.jpg')
			$(".h-fifth .yuan").attr('src', 'images/hhh-kong.jpg')
		});     //支付选项按钮




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