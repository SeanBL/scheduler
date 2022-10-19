var currentDay = $('#currentDay');
var saveButton = $('.saveButton');
var time = $('#time-block');
var log = console.log;

log("Testing and testing");

currentDay.addClass('lead');

function displayDate() {
    var dateNow = moment().format('dddd, MMMM Do');
    currentDay.text(dateNow);
}

function timeOfDay() {
   var timeNow = moment().format('h:mm:ss a');
   
   
}
setInterval(displayDate, 1000);
setInterval(timeOfDay, 1000);

saveButton.on("click", function() {
   log("Current Button: ",  $(this).parent().find("#hour").html());
})

// .css