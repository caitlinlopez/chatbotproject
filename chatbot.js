var message = {
  "whats your name" : ["Alexander Hamilton. My name is Alexander Hamilton, and there's a million things I haven't done, but just you wait, just you wait."],
  "what time is it" : ["It is " + returnTime() + ".", "Showtime! " + "(It's " + returnTime() + ".)"],
  "whats the date" : ["It's " + returnDate() + "."],
  "take a break" : ["I am on my way."],
  "can i buy you drink" : ["That would be nice."],
  "wheres your family from" : ["Unimportant. There's a million things I haven't done, but just you wait, just you wait."],
  "who is your wife" : ["Elizabeth Schuyler Hamilton", "Eliza Schuyler Hamilton"],
  "who is maria reynolds" : ["lol idk"],
  "how are you" : ["Not satisfied."],
  "hello" : ["Hi", "Hey."]
}

var hamilton = {
  "" : ["Pardon me. Are you Aaron Burr, sir?"]
}

function button(){
  var userInput = $("#input").val();
  var lowerCase = userInput.toLowerCase().replace(/[^a-zA-Z ]+/g, '').replace('/ {2,}/',' ');
  var answer = message[lowerCase];
  var question = hamilton[lowerCase];

  if (question) {
    var randomAnswer = question[Math.floor((Math.random() * question.length))];

    $("#chat-area").append("Hamilton" + ": " + randomAnswer + "<br>" + "<br>");
  }
  else if(lowerCase.indexOf("lafayette") > -1){
    answer = "I’M TAKIN THIS HORSE BY THE REINS MAKIN’ REDCOATS REDDER WITH BLOODSTAINS";

    $("#chat-area").append("You" + ": " + userInput + "<br>");
    $("#chat-area").append("Hamilton" + ": " + answer + "<br>" + "<br>");
  }
  else if (answer == undefined){
    var fallback = ["My dog speaks more eloquently than thee!", "What?", "I will never understand you."];
    var rand = fallback[Math.floor((Math.random() * fallback.length))];

    $("#chat-area").append("You" + ": " + userInput + "<br>");

    $("#chat-area").append("Hamilton" + ": " + rand + "<br>" + "<br>");
  }
  else {
  var rAnswer = answer[Math.floor((Math.random() * answer.length))];

  $("#chat-area").append("You" + ": " + userInput + "<br>");
  $("#chat-area").append("Hamilton" + ": " + rAnswer + "<br>" + "<br>");
  }
}

function returnTime(){
  var now = new Date(Date.now());
  var hours = now.getHours();
  var minutes = now.getMinutes();

  if (hours <= 11){
    return hours + ":" + minutes + " AM";
  }
  else{
    return hours + ":" + minutes + " PM";
  }
}

function enter(event){
  var x = event.keyCode;

  if(x == 13){
    button();
  }
}

function returnDate(){
  var now = new Date(Date.now());
  var m = new Array();
  m[0] = "January";
  m[1] = "February";
  m[2] = "March";
  m[3] = "April";
  m[4] = "May";
  m[5] = "June";
  m[6] = "July";
  m[7] = "August";
  m[8] = "September";
  m[9] = "October";
  m[10] = "November";
  m[11] = "December";
  var month = m[now.getMonth()];
  var date = now.getDate();
  var year = now.getFullYear();

  return month + " " + date + ", " + year;
}
