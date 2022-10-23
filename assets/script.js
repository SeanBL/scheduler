var currentDay = $('#currentDay');
var saveButton = $('.saveButton');
var time = $('#time-block');
var event9 = $('#event9');
var event10 = $('#event10');
var log = console.log;

log("Testing and testing");

currentDay.addClass('lead');

$("div").first().hide();

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
var events9am = [];
var events10am = [];
var events11am = [];

var textInput9 = document.querySelector("#event9");
var textInput10 = document.querySelector("#event10");
var textInput11 = document.queryCommandValue("#Event11");

$("#saveBtn9").click(function(){
   var textArea = textInput9.value.trim();
   if (textArea === "") {
      return;
   }
 
   events9am.push(textArea);
   
   $("div").first().show();
   $(".addTime").append("9AM ");

storeText();
renderText();
});

function renderText() {
for (var i = 0; i < events9am.length; i++) {
   var event9am = events9am[i];
   $('#event9').text(event9am);
   console.log(event9am);
   console.log(textInput9.value);
   }
}

function storeText () {
   localStorage.setItem("storage-text", JSON.stringify(events9am));
}

function init() {
   var gettingText = JSON.parse(localStorage.getItem("storage-text"));
   if (gettingText !== null) {
      events9am = gettingText;
     }
   renderText();
}

init();

 //localStorage.clear();
 
 var events10am = [];

 var textInput10 = document.querySelector("#event10");
 $("#saveBtn10").click(function(){
    var textArea = textInput10.value.trim();
    if (textArea === "") {
       return;
    }
  
    events10am.push(textArea);

    $("div").first().show();
    
 storeText10();
 renderText10();
 });
 
 function renderText10() {
 for (var i = 0; i < events10am.length; i++) {
    var event10am = events10am[i];
    $('#event10').text(event10am);
 }
 }
 
 function storeText10() {
    localStorage.setItem("storage-text10", JSON.stringify(events10am));
 }
 
 function init10() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text10"));
    if (gettingText !== null) {
       events10am = gettingText;
      }
    renderText10();
 }
 
 init10();

 var events11am = [];

 var textInput11 = document.querySelector("#event11");
 
 $("#saveBtn11").click(function(){
   var textArea = textInput11.value.trim();
    if (textArea === "") {
       return;
    }
  
    events11am.push(textArea);

    $("div").first().show();
    
 storeText11();
 renderText11();
 });
 
 function renderText11() {
 for (var i = 0; i < events11am.length; i++) {
    var event11am = events11am[i];
    $('#event11').text(event11am);
 }
 }
 
 function storeText11() {
    localStorage.setItem("storage-text11", JSON.stringify(events11am));
 }
 
 function init11() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text11"));
    if (gettingText !== null) {
       events11am = gettingText;
      }
    renderText11();
 }
 
 init11();

 var events12pm = [];

 var textInput12 = document.querySelector("#event12");
 
 $("#saveBtn12").click(function(){
    var textArea = textInput12.value.trim();
    if (textArea === "") {
       return;
    }
  
    events12pm.push(textArea);

    $("div").first().show();
    
 storeText12();
 renderText12();
 });
 
 function renderText12() {
 for (var i = 0; i < events12pm.length; i++) {
    var event12pm = events12pm[i];
    $('#event12').text(event12pm);
 }
 }
 
 function storeText12() {
    localStorage.setItem("storage-text12", JSON.stringify(events12pm));
 }
 
 function init12() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text12"));
    if (gettingText !== null) {
       events12pm = gettingText;
      }
    renderText12();
 }
 
 init12();

 var events1pm = [];

 var textInput1 = document.querySelector("#event1");
 
 $("#saveBtn1").click(function(){
    var textArea = textInput1.value.trim();
    if (textArea === "") {
       return;
    }
  
    events1pm.push(textArea);

    $("div").first().show();
    
 storeText1();
 renderText1();
 });
 
 function renderText1() {
 for (var i = 0; i < events1pm.length; i++) {
    var event1pm = events1pm[i];
    $('#event1').text(event1pm);
 }
 }
 
 function storeText1() {
    localStorage.setItem("storage-text1", JSON.stringify(events1pm));
 }
 
 function init1() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text1"));
    if (gettingText !== null) {
       events1pm = gettingText;
      }
    renderText1();
 }
 
 init1();

 var events2pm = [];

 var textInput2 = document.querySelector("#event2");
 
 $("#saveBtn2").click(function(){
    var textArea = textInput2.value.trim();
    if (textArea === "") {
       return;
    }
  
    events2pm.push(textArea);

    $("div").first().show();
    
 storeText2();
 renderText2();
 });
 
 function renderText2() {
 for (var i = 0; i < events2pm.length; i++) {
    var event2pm = events2pm[i];
    $('#event2').text(event2pm);
 }
 }
 
 function storeText2() {
    localStorage.setItem("storage-text2", JSON.stringify(events2pm));
 }
 
 function init2() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text2"));
    if (gettingText !== null) {
       events2pm = gettingText;
      }
    renderText2();
 }
 
 init2();

 var events3pm = [];

 var textInput3 = document.querySelector("#event3");
 
 $("#saveBtn3").click(function(){
    var textArea = textInput3.value.trim();
    if (textArea === "") {
       return;
    }
  
    events3pm.push(textArea);

    $("div").first().show();
    
 storeText3();
 renderText3();
 });
 
 function renderText3() {
 for (var i = 0; i < events3pm.length; i++) {
    var event3pm = events3pm[i];
    $('#event3').text(event3pm);
 }
 }
 
 function storeText3() {
    localStorage.setItem("storage-text3", JSON.stringify(events3pm));
 }
 
 function init3() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text3"));
    if (gettingText !== null) {
       events3pm = gettingText;
      }
    renderText3();
 }
 
 init3();

 var events4pm = [];

 var textInput4 = document.querySelector("#event4");
 
 $("#saveBtn4").click(function(){
    var textArea = textInput4.value.trim();
    if (textArea === "") {
       return;
    }
  
    events4pm.push(textArea);

    $("div").first().show();
    
 storeText4();
 renderText4();
 });
 
 function renderText4() {
 for (var i = 0; i < events4pm.length; i++) {
    var event4pm = events4pm[i];
    $('#event4').text(event4pm);
 }
 }
 
 function storeText4() {
    localStorage.setItem("storage-text4", JSON.stringify(events4pm));
 }
 
 function init4() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text4"));
    if (gettingText !== null) {
       events4pm = gettingText;
      }
    renderText4();
 }
 
 init4();

 var events5pm = [];

 var textInput5 = document.querySelector("#event5");
 
 $("#saveBtn5").click(function(){
    var textArea = textInput5.value.trim();
    if (textArea === "") {
       return;
    }
  
    events5pm.push(textArea);

    $("div").first().show();
    
 storeText5();
 renderText5();
 });
 
 function renderText5() {
 for (var i = 0; i < events5pm.length; i++) {
    var event5pm = events5pm[i];
    $('#event5').text(event5pm);
 }
 }
 
 function storeText5() {
    localStorage.setItem("storage-text5", JSON.stringify(events5pm));
 }
 
 function init5() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text5"));
    if (gettingText !== null) {
       events5pm = gettingText;
      }
    renderText5();
 }
 
 init5(); 