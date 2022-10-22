var currentDay = $('#currentDay');
var saveButton = $('.saveButton');
var time = $('#time-block');
var event9 = $('#event9');
var event10 = $('#event10');
var log = console.log;




log("Testing and testing");

currentDay.addClass('lead');

function displayDate() {
    var dateNow = moment().format('dddd, MMMM Do');
    currentDay.text(dateNow);
}

setInterval(displayDate, 1000);

function timeOfDay(hourAfter, hourBefore, eventId) {

   if (moment().isAfter(moment(hourAfter, 'hh:mm:ss a'))) {
      $(eventId).addClass("past");
   } else if (moment().isBefore(moment(hourBefore, 'hh:mm:ss a'))) {
      $(eventId).addClass("future");
   } else  {
      $(eventId).addClass("present");
   }
  
}

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
//    log("Current Button: ",  $(this).parent().find(".hour").html());
//    textArea = $.trim($("#event9").val());
//    console.log(textArea);

// })

var textInput = document.querySelector("#event9");
$("#saveBtn").click(function(){
   var textArea = textInput.value.trim();
   if (textArea === "") {
      return;
   }

   hourlyEvents.push(textArea);
   //textInput.value = "";
   storeText();
   renderText();
   // testing(textArea);
});

var hourlyEvents = [];

function renderText() {
   for (var i = 0; i < hourlyEvents.length; i++) {
      var hourlyEvent = hourlyEvents[i];
      event9.textContent = hourlyEvent;
      //event9.setAtribute("data-index", i);
      console.log(hourlyEvent);
      event9.appendChild(hourlyEvent);
   }
   //$(event9).text(parsedText);
}

function storeText() {
   localStorage.setItem("storage-text", JSON.stringify(hourlyEvents));
}

function init() {
  var gettingText = JSON.parse(localStorage.getItem("storage-text"));

  if (gettingText !== null) {
   hourlyEvents = gettingText;
  }

  renderText();
}

init();






// function testing(textTest) {
//    var testing = {
//       text: textTest
//    };
//    console.log(testing);

 //localStorage.clear();
 

// .css