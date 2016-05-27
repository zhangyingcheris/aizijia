$('#login-model').click(function() {
				$('#login').css('display', 'block');
				$('.login-cover').addClass('alpha')
			});
			$('#login-close,.login-cover').click(function() {
				$('#login').css('display', 'none');
				$('.login-cover').removeClass('alpha')
			});
			//注册事件
			$('#logup-model').click(function() {
				$('#logup').css('display', 'block');
				$('.login-cover').addClass('alpha');
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