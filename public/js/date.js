$(document).ready(function() {

	$('#calendar').fullCalendar({
		// defaultDate: '2016-04-12',
		editable: true,
		eventLimit: true,
		header: {
			left: 'prev',
			center: 'title',
			right: 'next,',
		},
		events: [
		{
			title: 'Repea',
			start: '2016-04-16T16:00:00'
		},
		{
			title: 'Confe',
			start: '2016-04-11',
			// end: '2016-04-13'
		},
		{
			title: 'Birthday',
			start: '2016-04-20T07:00:00'
		},
		{
			title: '活动结束',
			start: '2016-04-28'
		}
	],
		dayClick: function() {
    alert('a day has been clicked!');
    },
	// 	// buttonIcons:false,
	// 	//today,month,agendaWeek,agendaDay
	// 	// weekends: false,隐藏周末
	});
	var myEvent = ['2016-04-23','2016-04-26'];
	// console.log(myEvent[0]);

	function setMyEvent() {
		for (var i = 0; i < myEvent.length; i++) {
			var mySelector = '.fc-widget-content.fc-future' + '[data-date="' + myEvent[i] + '"]';
			$(mySelector).css('position', 'relative').append('<img src="images/jian-logo.png" class="jian-logo">').append('<span class="time-atonce">实时</span>');
		}
	}
	setMyEvent();
	// console.log($('.fc-today'));这个显示today的问题解决了，在5188行，搜索‘自己修改’
	function setWeek() {    //修改week显示函数
		$('.fc-day-header.fc-sun').text('日');
		$('.fc-day-header.fc-mon').text('一');
		$('.fc-day-header.fc-tue').text('二');
		$('.fc-day-header.fc-wed').text('三');
		$('.fc-day-header.fc-thu').text('四');
		$('.fc-day-header.fc-fri').text('五');
		$('.fc-day-header.fc-sat').text('六');
	}
	setWeek();
	$('.fc-prev-button,.fc-next-button').click(function() {
		setWeek();
		setMyEvent();
	});

	function setTitle() {  //修改标题显示问题
		var myMonthName = ['一月份','二月份','三月份','四月份','五月份','六月份','七月份','八月份','九月份','十月份','十一月份','十二月份'];
		var myMonth = new Date();
		var myMonthNum = Number(myMonth.getMonth());
		var myYearNum = Number(myMonth.getFullYear());
		// console.log(myYearNum);
		$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
		$('.fc-prev-button').click(function() {
			if (myMonthNum > 0) {
				myMonthNum --;
				$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
			} else {
				myMonthNum = 11;
				myYearNum --;
				$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
			}
		});
		$('.fc-next-button').click(function() {
			if (myMonthNum > 10) {
				myMonthNum = 0;
				myYearNum ++;
				$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
			} else {
				myMonthNum ++;
				$('.fc-center h2').text(myMonthName[myMonthNum] + myYearNum);
			}
		});
	}
	setTitle();

});