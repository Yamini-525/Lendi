function talk() {
  var know = {
    Hi: "Hi",
    "Who are you": "Hello, Yamini here ",
    "How are you": "Good :)",
    "What can i do for you": "Let me know if there are any queries",
    ok: "Thank You So Much ",
    Bye: "Okay! Will meet soon..",
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Sorry,I didn't understand <br>";
  }
}
