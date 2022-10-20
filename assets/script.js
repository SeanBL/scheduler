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

function timeOfDay(hourAfter, hourBefore, eventId) {
   
   // if (moment().isAfter(moment('10:00:00 am', 'hh:mm:ss a'))) {
   //    console.log("after");
   //    $('#event9').addClass("past");
   // } else if (moment().isBefore(moment('9:00:00 am', 'hh:mm:ss a'))) {
   //    $('#event9').addClass("future");
   //    console.log("before");
   // } else  {
   //    $('#event9').addClass("present");
   //    console.log("now")
   // }

   if (moment().isAfter(moment(hourAfter, 'hh:mm:ss a'))) {
      console.log("after");
      $(eventId).addClass("past");
   } else if (moment().isBefore(moment(hourBefore, 'hh:mm:ss a'))) {
      $(eventId).addClass("future");
      console.log("before");
   } else  {
      $(eventId).addClass("present");
      console.log("now")
   }
  
}
setInterval(displayDate, 1000);

setInterval(function() {timeOfDay("10:00:00 am", "9:00:00 am", "#event9")}, 1000);
setInterval(function() {timeOfDay("11:00:00 am", "10:00:00 am", "#event10")}, 1000);
setInterval(function() {timeOfDay("12:00:00 pm", "11:00:00 am", "#event11")}, 1000);
setInterval(function() {timeOfDay("1:00:00 pm", "12:00:00 pm", "#event12")}, 1000);
setInterval(function() {timeOfDay("2:00:00 pm", "1:00:00 pm", "#event1")}, 1000);
setInterval(function() {timeOfDay("3:00:00 pm", "2:00:00 pm", "#event2")}, 1000);
setInterval(function() {timeOfDay("4:00:00 pm", "3:00:00 pm", "#event3")}, 1000);
setInterval(function() {timeOfDay("5:00:00 pm", "4:00:00 pm", "#event4")}, 1000);
setInterval(function() {timeOfDay("6:00:00 pm", "5:00:00 pm", "#event5")}, 1000);

// saveButton.on("click", function() {
//    log("Current Button: ",  $(this).parent().find("#hour").html());
// })

// .css