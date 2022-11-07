var currentDay = $('#currentDay');
var saveButton = $('.saveButton');
var time = $('#time-block');
var event9 = $('#event9');
var event10 = $('#event10');

currentDay.addClass('lead');
$("div").first().hide();

/* This function displays the current date at the top of the page. The displayDate function gets called every 1 second.*/
function displayDate() {
    var dateNow = moment().format('dddd, MMMM Do');
    currentDay.text(dateNow);
}

setInterval(displayDate, 1000);

/* This function sets the colors for each time. If the time has past the indicated timeblock, the box will be changed to grey. If it is the current time, the color will be red. If the time has not occurred yet, the box will be colored green. */
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


//This array holds all the text values saved in the 9am slot.
var events9am = [];

var textInput9 = document.querySelector("#event9");
var textInput10 = document.querySelector("#event10");
var textInput11 = document.queryCommandValue("#Event11");

/* This event listener pushes the value of the user's input to the events9am array. The storeText and renderText function also gets called.*/
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

// This function iterates through the events9am array displays the last saved text.
function renderText() {
for (var i = 0; i < events9am.length; i++) {
   var event9am = events9am[i];
   $('#event9').text(event9am);
   }
}

// This function converts the text values into string values and stores those values to local storage.
function storeText () {
   localStorage.setItem("storage-text", JSON.stringify(events9am));
}

// This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 9am event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
function init() {
   var gettingText = JSON.parse(localStorage.getItem("storage-text"));
   if (gettingText !== null) {
      events9am = gettingText;
     }
   renderText();
}
init();

 
 //This array holds all the text values saved in the 10am slot.
 var events10am = [];

 /* This event listener pushes the value of the user's input to the events10am array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events10am array displays the last saved text.
 function renderText10() {
 for (var i = 0; i < events10am.length; i++) {
    var event10am = events10am[i];
    $('#event10').text(event10am);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText10() {
    localStorage.setItem("storage-text10", JSON.stringify(events10am));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 10am event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init10() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text10"));
    if (gettingText !== null) {
       events10am = gettingText;
      }
    renderText10();
 }
 init10();

 //This array holds all the text values saved in the 11am slot.
 var events11am = [];

 var textInput11 = document.querySelector("#event11");
 
 /* This event listener pushes the value of the user's input to the events11am array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events11am array displays the last saved text.
 function renderText11() {
 for (var i = 0; i < events11am.length; i++) {
    var event11am = events11am[i];
    $('#event11').text(event11am);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText11() {
    localStorage.setItem("storage-text11", JSON.stringify(events11am));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 11am event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init11() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text11"));
    if (gettingText !== null) {
       events11am = gettingText;
      }
    renderText11();
 }
 init11();

 //This array holds all the text values saved in the 12pm slot.
 var events12pm = [];

 var textInput12 = document.querySelector("#event12");
 
 /* This event listener pushes the value of the user's input to the events12pm array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events12pm array displays the last saved text.
 function renderText12() {
 for (var i = 0; i < events12pm.length; i++) {
    var event12pm = events12pm[i];
    $('#event12').text(event12pm);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText12() {
    localStorage.setItem("storage-text12", JSON.stringify(events12pm));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 12pm event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init12() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text12"));
    if (gettingText !== null) {
       events12pm = gettingText;
      }
    renderText12();
 }
 init12();

 //This array holds all the text values saved in the 1pm slot.
 var events1pm = [];

 var textInput1 = document.querySelector("#event1");
 
 /* This event listener pushes the value of the user's input to the events1pm array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events1pm array displays the last saved text.
 function renderText1() {
 for (var i = 0; i < events1pm.length; i++) {
    var event1pm = events1pm[i];
    $('#event1').text(event1pm);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText1() {
    localStorage.setItem("storage-text1", JSON.stringify(events1pm));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 1pm event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init1() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text1"));
    if (gettingText !== null) {
       events1pm = gettingText;
      }
    renderText1();
 }
 init1();

 //This array holds all the text values saved in the 2pm slot.
 var events2pm = [];

 var textInput2 = document.querySelector("#event2");
 
 /* This event listener pushes the value of the user's input to the events2pm array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events2pm array displays the last saved text.
 function renderText2() {
 for (var i = 0; i < events2pm.length; i++) {
    var event2pm = events2pm[i];
    $('#event2').text(event2pm);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText2() {
    localStorage.setItem("storage-text2", JSON.stringify(events2pm));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 2pm event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init2() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text2"));
    if (gettingText !== null) {
       events2pm = gettingText;
      }
    renderText2();
 }
 init2();

 //This array holds all the text values saved in the 3pm slot.
 var events3pm = [];

 var textInput3 = document.querySelector("#event3");
 
 /* This event listener pushes the value of the user's input to the events3pm array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events3pm array displays the last saved text.
 function renderText3() {
 for (var i = 0; i < events3pm.length; i++) {
    var event3pm = events3pm[i];
    $('#event3').text(event3pm);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText3() {
    localStorage.setItem("storage-text3", JSON.stringify(events3pm));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 3pm event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init3() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text3"));
    if (gettingText !== null) {
       events3pm = gettingText;
      }
    renderText3();
 }
 init3();

 //This array holds all the text values saved in the 4pm slot.
 var events4pm = [];

 var textInput4 = document.querySelector("#event4");
 
 /* This event listener pushes the value of the user's input to the events4pm array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events4pm array displays the last saved text.
 function renderText4() {
 for (var i = 0; i < events4pm.length; i++) {
    var event4pm = events4pm[i];
    $('#event4').text(event4pm);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText4() {
    localStorage.setItem("storage-text4", JSON.stringify(events4pm));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 4pm event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init4() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text4"));
    if (gettingText !== null) {
       events4pm = gettingText;
      }
    renderText4();
 }
 init4();

 //This array holds all the text values saved in the 5pm slot.
 var events5pm = [];

 var textInput5 = document.querySelector("#event5");
 
 /* This event listener pushes the value of the user's input to the events5pm array. The storeText and renderText function also gets called.*/
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
 
 // This function iterates through the events5pm array displays the last saved text.
 function renderText5() {
 for (var i = 0; i < events5pm.length; i++) {
    var event5pm = events5pm[i];
    $('#event5').text(event5pm);
 }
 }
 
 // This function converts the text values into string values and stores those values to local storage.
 function storeText5() {
    localStorage.setItem("storage-text5", JSON.stringify(events5pm));
 }
 
 // This function retrieves the values stored in local storage and converts those values back into objects. The renderText function is called to display the text values to the 5pm event box. The init function is called each time the browser page is refreshed to immediately show the user what events have been saved. 
 function init5() {
    var gettingText = JSON.parse(localStorage.getItem("storage-text5"));
    if (gettingText !== null) {
       events5pm = gettingText;
      }
    renderText5();
 }
 init5(); 


//localStorage.clear();

// var log = console.log;
// log("Testing and testing");

// saveButton.on("click", function() {
//    log("Current Button: ",  $(this).parent().find(".hour").html());
//    textArea = $.trim($("#event9").val());
//    console.log(textArea);

// })