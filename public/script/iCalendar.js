/* $(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay',
		},
      eventLimit: true, // allow "more" link when too many events
      events: [
      {
      	title: '김해 0 - 2 창원',
      	start: '2019-08-02',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black',
      	url:'http://www.n-league.net/index.php?mid=MatchRecordReport&league_year=2019&month=8&league_srl=501917&match_srl=501989'
      },
      {
      	title: '천안 vs 창원',
      	start: '2019-08-10',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '창원 vs 목포',
      	start: '2019-08-16',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '강릉 vs 창원',
      	start: '2019-08-23',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '창원 vs 경주',
      	start: '2019-08-30',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '창원 vs 부산',
      	start: '2019-09-04',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '대전 vs 창원',
      	start: '2019-09-07',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '창원 vs 김해',
      	start: '2019-09-20',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '창원 vs 천안',
      	start: '2019-09-25',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '목포 vs 창원',
      	start: '2019-09-28',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '창원 vs 강릉',
      	start: '2019-10-18',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '경주 vs 창원',
      	start: '2019-10-23',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      {
      	title: '부산 vs 창원',
      	start: '2019-10-26',
      	backgroundColor:'white',
      	borderColor : 'white',
      	textColor:'black'
      },
      ]

  });

	$(".fc-right .fc-button-group").append(
		'<div class="input-group datetimepicker"><input type="text" class="form-control fc-datepicker" placeholder="YYYY-MM-DD" style="padding: 0;width: 0;border: none;margin: 0;"></div>');
	$(".fc-datepicker").datepicker({
		dateFormat: 'yy-mm-dd',
		showOn: "button",
		buttonText: '<span class="input-group-addon"><i class="fa fa-calendar"></i></span>',
	});

});
*/

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

      plugins: [ 'interaction', 'dayGrid', 'list', 'googleCalendar' ],

      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listYear'
      },

      displayEventTime: false, // don't show the time column in list view

      // THIS KEY WON'T WORK IN PRODUCTION!!!
      // To make your own Google API key, follow the directions here:
      // http://fullcalendar.io/docs/google_calendar/
      googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

      // US Holidays
      events: 'en.usa#holiday@group.v.calendar.google.com',

      eventClick: function(arg) {
        // opens events in a popup window
        window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

        arg.jsEvent.preventDefault() // don't navigate in main tab
      },

      loading: function(bool) {
        document.getElementById('loading').style.display =
          bool ? 'block' : 'none';
      }

    });

    calendar.render();
  });
