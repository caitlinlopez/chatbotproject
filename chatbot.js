var message = {
  "hello" : "hi"
}

function button(){
  var userInput = $("#input").val();
  $("#chat-area").html(userInput);

  var answer = message[userInput];
  document.getElementById("chat-area").innerHTML = userInput + ": " + answer; 
}

/*
  var x = {
    "z" : "c",
  }

  var r = x["z" or userInput]; --> c

  var userInput = "hello";
*/
