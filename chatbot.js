var message = {
  "what's your name?" : "Alexander Hamilton. My name is Alexander Hamilton, and there's a million things I haven't done, but just you wait, just you wait.",
  "x" : "y"
}

function enter(event){
var x = event.keyCode;
if(x == 13){
  button();
}

}

function button(){
  var userInput = $("#input").val();

  var lowerCase = userInput.toLowerCase();

  var answer = message[lowerCase];

  if (answer == undefined){
    var fallback = ["My dog speaks more eloquently than thee!", "???"];
    var rand = fallback[Math.floor((Math.random() * fallback.length))];

    $("#chat-area").append("You" + ": " + userInput + "<br>");

    $("#chat-area").append("Hamilton" + ": " + rand + "<br>" + "<br>");
  }

  else {
  $("#chat-area").append("You" + ": " + userInput + "<br>");

  $("#chat-area").append("Hamilton" + ": " + answer + "<br>" + "<br>");
  //document.getElementById("chat-area").innerHTML = userInput + ": " + answer;
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
