		$(".jiazai p").click(function(){
			$(".hidden").css("display","block");
			$(".jiazai").css("display","none")
		})  
		$(".guanbiyemian").click(function(){
			$(".hidden").css("display","none");
			$(".jiazai").css("display","block")
		})    

		//点击下拉“加载更多”


		$(".h-xuanxiang .firstb").click(function(){
			$(".kandian").css("display","block").siblings().css("display","none")
		})
		$(".h-xuanxiang .secondb").click(function(){
			$(".h-fadai").css("display","block").siblings().css("display","none")
		})
		$(".h-xuanxiang .thirdb").click(function(){
			$(".h-ditu").css("display","block").siblings().css("display","none")
		})
		$(".h-xuanxiang .forthb").click(function(){
			$(".h-sixiangdian").css("display","block").siblings().css("display","none")
		})
		$(".h-xuanxiang .fivthb").click(function(){
			$(".h-xianlu").css("display","block").siblings().css("display","none")
		})
		$(".h-xuanxiang .sixthb").click(function(){
			$(".h-jiatuan").css("display","block").siblings().css("display","none")
		})    //选项卡



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


			// 订单详情
		$('#jump-to-top').click(function() {
			$('html,body').animate({scrollTop:125}, 500);
		});
		$('#detail-modal').click(function() {
			$('#detail').css('display', 'block');
			$('.login-cover').addClass('alpha');
		});
		$('.detail-close,.login-cover').click(function() {
			$('.login-cover').removeClass('alpha');
			$('#detail').css('display', 'none');
		});