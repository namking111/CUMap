
function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();
    const hours_Span = document.getElementById('hour');
    const minute_Span = document.getElementById('minute');
    const second_Span = document.getElementById('second');
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    hours_Span.innerHTML = hours;
    minute_Span.innerHTML = ": " + mins;
    second_Span.innerHTML = ": " + secs;
}

function Dated() {
    const AllDate = new Date();
    var year = AllDate.getFullYear();
    var day = AllDate.getDay();
    var month = AllDate.getMonth();
    var dateNum = AllDate.getDate();
    var Dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var Montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    const day_Span = document.getElementById('Day');
    const Date_Span = document.getElementById('DateNumber');
    const month_Span = document.getElementById('Month');
    const year_Span = document.getElementById('Year');

    day_Span.innerHTML = Dayarray[day];
    Date_Span.innerHTML = dateNum;
    month_Span.innerHTML = Montharray[month];
    year_Span.innerHTML = year;
}
setInterval(clock, 100);
setInterval(Dated, 1000);



