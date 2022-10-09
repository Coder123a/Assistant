function getVal() {
  
    var x = document.querySelector('input').value;
    document.getElementById('sus').innerHTML=x;
    var check=document.getElementById('checkVal').value == "Hello";
    if (check) {
      document.getElementById('sussy').innerHTML="Hi, how are you?";
    }
    var check=document.getElementById('checkVal').value == "Bye";
    if (check) {
      document.getElementById('sussy').innerHTML="Bye";
    }
    var check=document.getElementById('checkVal').value == "RickRoll";
    if (check) {
      document.getElementById('sussy').innerHTML="Never Gonna Give You Up. Never Gonna Let You Down. Never Gonna Run around and desert you.";
    }

    var check=document.getElementById('checkVal').value == "I am fine";
    if(check) {
      document.getElementById('sussy').innerHTML="That's good"
    }
    var check=document.getElementById('checkVal').value == "Joke";
    var Jokes = ["How did the robot cross the river?... With a row-boat🛶", "What did the left eye said to the other eye... Between us, something smells👃.", "Nintendo: Press any key to continue Me: Presses the power button", "Know the resturant called karma.... There's no menu you get what you deserve", "You know what's good about Switzerland?... I don't know but, the flag is big plus"];
    if (check) {
      var theJoke = Jokes[Math.floor(Math.random() * Jokes.length)];
      document.getElementById('sussy').innerHTML=(theJoke);
  
    }  
    var check=document.getElementById('checkVal').value == "Troll me";
    if(check) {
      document.getElementById('sussy').innerHTML="Where's Joe"
    }
    var check=document.getElementById('checkVal').value == "Joe who";
    if(check) {
      document.getElementById('sussy').innerHTML="Joe Mama"
    }
    var check=document.getElementById('checkVal').value == "Rock";
    var RPS = ["Rock", "Paper", "Scissor"];
    if(check) {
      var ANS = RPS[Math.floor(Math.random() * RPS.length)];
      document.getElementById('sussy').innerHTML=(ANS);
    }
    var check=document.getElementById('checkVal').value == "Paper";
    var RPS = ["Rock", "Paper", "Scissor"];
    if(check) {
      var ANS = RPS[Math.floor(Math.random() * RPS.length)];
      document.getElementById('sussy').innerHTML=(ANS);
    }
    var check=document.getElementById('checkVal').value == "Scisssors";
    var RPS = ["Rock", "Paper", "Scissor"];
    if(check) {
      var ANS = RPS[Math.floor(Math.random() * RPS.length)];
      document.getElementById('sussy').innerHTML=(ANS);
    }
}