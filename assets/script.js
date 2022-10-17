var currentDay = $('#currentDay');
var time = $('#time-block');
currentDay.addClass('lead');

function displayDate() {
    var dateNow = moment().format('dddd, MMMM Do');
    currentDay.text(dateNow);
}

function timeOfDay() {
   
}
setInterval(displayDate, 1000);