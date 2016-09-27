var message = {
  "hello" : "hi",
  "x" : "y"
}

function button(){
  var userInput = $("#input").val();
  $("#chat-area").append(userInput + "<br>");

  var answer = message[userInput];
  $("#chat-area").append("person" + ": " + answer + "<br>" + "<br>");
  //document.getElementById("chat-area").innerHTML = userInput + ": " + answer;

}

/*
  var x = {
    "z" : "c",
  }

  var r = x["z" or userInput]; --> c

  var userInput = "hello";
*/
