var message = {
  "what's your name?" : ["Alexander Hamilton. My name is Alexander Hamilton, and there's a million things I haven't done, but just you wait, just you wait."],
  "what time is it?": ["It is " + returnTime() + "."],
  "take a break." : ["I am on my way."],
  "can i buy you drink?" : ["That would be nice."],
  "hello" : ["a", "b", "c"]
}

function button(){
  var userInput = $("#input").val();
  var lowerCase = userInput.toLowerCase();
  var answer = message[lowerCase];

  if (answer == undefined){
    var fallback = ["My dog speaks more eloquently than thee!", "What?", ];
    var rand = fallback[Math.floor((Math.random() * fallback.length))];

    $("#chat-area").append("You" + ": " + userInput + "<br>");

    $("#chat-area").append("Hamilton" + ": " + rand + "<br>" + "<br>");
  }
else if (answer == " ") {
    $("#chat-area").append("You" + ": " + "suck" + "<br>");
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



/*
  var x = {
    "z" : "c",
  }

  var r = x["z" or userInput]; --> c

  var userInput = "hello";

  if (answer == undefined){
    $("#chat-area").append(userInput + "<br>");

    var answerr = "what";
    $("#chat-area").append("person" + ": " + answer + "<br>" + "<br>");
  }

  input = input.toLowerCase()

*/
