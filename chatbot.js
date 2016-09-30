var message = {
  "hello" : "hi",
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
  var answer = message[userInput];

  if (answer == undefined){
    var fallback = ["what", "???"];
    //var rand = Math.floor((Math.random() * fallback.length));

    $("#chat-area").append(userInput + "<br>");

    $("#chat-area").append("person" + ": " + fallback + "<br>" + "<br>");
  }

  else {
  $("#chat-area").append(userInput + "<br>");

  $("#chat-area").append("person" + ": " + answer + "<br>" + "<br>");
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
