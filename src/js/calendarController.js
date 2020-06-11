var calendars = {};
$(document).ready(function() {
    // var thisMonth = moment().format('YYYY-MM-DD');
    var eventArray = [{
        date: '2020-06-22',
        title: 'Start of Summer School (6 Weeks)'
    }, {
        title: "First Day of School for G12 VN Program ONLY",
        date: '2020-07-27'
    }, {
        title: "End of Summer School (6 Weeks)",
        date: '2020-07-31'
    }, {
        title: "Teachers Arrive: Induction and curriculum mapping",
        date: '2020-08-10'
    }, {
        title: "Teachers Arrive: Induction and curriculum mapping",
        date: '2020-08-11'
    }, {
        title: "Teachers Arrive: Induction and curriculum mapping",
        date: '2020-08-12'
    }, {
        title: "Teachers Arrive: Induction and curriculum mapping",
        date: '2020-08-13'
    }];

    calendars.clndr1 = $('.cal1').clndr({
        events: eventArray,
        ready: function(e) {
            var text = "";
            //
            this.eventsThisInterval.forEach(e => {
                var title = e.title;
                var dayOfWeek = e._clndrEndDateObject._d.toString().split(' ')[0];
                var day = e.date.substr(8, 2);
                text += '<tr>' +
                    '<td class="day--event">' +
                    day +
                    '<span>' + dayOfWeek + '</span>' +
                    '</td>' +
                    '<td class="title--event">' + title + '</td>' +
                    +'</tr>';
            });
            //
            var monthNow = $('.month').html().split(' ')[0];
            var yearNow = $('.month').html().split(' ')[1];
            $('#monthNow').html('<h5 class="title-calendar" id="monthNow">' + monthNow +
                '<span id="yearNow">' + yearNow + '</span>' + '</h5>');
            $(".data-calendar").html('<tbody>' + text +
                '</tbody>');
        },
        clickEvents: {
            onMonthChange: function(month) {
                var text = "";
                //
                this.eventsThisInterval.forEach(e => {
                    var title = e.title;
                    var dayOfWeek = e._clndrEndDateObject._d.toString().split(' ')[0];
                    var day = e.date.substr(8, 2);
                    text += '<tr>' +
                        '<td class="day--event">' +
                        day +
                        '<span>' + dayOfWeek + '</span>' +
                        '</td>' +
                        '<td class="title--event">' + title + '</td>' +
                        +'</tr>';
                });
                //
                var monthNow = $('.month').html().split(' ')[0];
                var yearNow = $('.month').html().split(' ')[1];
                $('#monthNow').html('<h5 class="title-calendar" id="monthNow">' + monthNow +
                    '<span id="yearNow">' + yearNow + '</span>' + '</h5>');
                $(".data-calendar").html('<tbody>' + text +
                    '</tbody>');
            },
        },
        multiDayEvents: {
            singleDay: 'date',
            endDate: 'endDate',
            startDate: 'startDate'
        },
        showAdjacentMonths: true,
        adjacentDaysChangeMonth: false
    });
    // Bind all clndrs to the left and right arrow keys
    $(document).keydown(function(e) {
        // Left arrow
        if (e.keyCode == 37) {
            calendars.clndr1.back();
            calendars.clndr2.back();
            calendars.clndr3.back();
        }

        // Right arrow
        if (e.keyCode == 39) {
            calendars.clndr1.forward();
            calendars.clndr2.forward();
            calendars.clndr3.forward();
        }
    });
});