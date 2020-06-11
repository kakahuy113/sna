var calendars = {};

$(document).ready(function() {
    // var thisMonth = moment().format('YYYY-MM-DD');
    var eventArray = [{
        date: '2020-06-22',
        title: 'Start of Summer School (6 Weeks)'
    }, {
        title: "School Holiday",
        date: '2020-07-11'
    }, {
        title: "Tet Holidays",
        date: 1548504000000
    }, {
        title: "G.12 - First Day of School (G.12 full-day school for VN Program)",
        date: 1563796800000
    }, {
        title: "Parents&#039; and Students&#039; Orientation",
        date: 1565352000000
    }, {
        title: "First Day of School (K-G.12) \/ Term 1 begins<br><p>Opening Ceremony<\/p>",
        date: 1565611200000
    }, {
        title: "SNA Day (Minimum Schedule Day)",
        date: 1566561600000
    }];

    calendars.clndr1 = $('.cal1').clndr({
        events: eventArray,
        ready: function(e) {
            this.eventsThisInterval.forEach(e => {
                var titleR = e.title;
                var date = e.date;
                $(".data-title").html(
                    '<p>' + titleR + '</p>' +
                    '<p>' + date + '</p>'
                );
                console.log(date);
            });
        },
        clickEvents: {
            onMonthChange: function(month) {
                console.log(this);
                this.eventsThisInterval.forEach(e => {
                    var titleR = e.title;
                    var date = e.date;
                    $(".data-title").html(
                        '<p>' + titleR + '</p>' +
                        '<p>' + date + '</p>'
                    );
                });
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