


function islandGame() {
  alert("You have just been marooned on an island. " + "You only have a pocket knife and a fire starter. " + "What do you do first?");
      var action = prompt("Take off your clothes and run around naked. " + "Start a fire. " + "Build a shelter.");
        var randomNumber = Math.round(Math.random()*3);
  console.log(randomNumber + 'stuff');
 if (action === "start a fire");{
      alert("You built a fire.");
 }
 if (randomNumber == 2){
  alert("Your fire went out. " + "You got hypothermia and died. ");
      alert ("You lose!!!");
}
else if (randomNumber == 1){
    alert("It's morning your fire kept you warm all night");
      var action2 = prompt("what do you do next? " + "Search the island. " + "Search for food ");
}
if (action2 = "search the island");{
  alert("Your searching the island.");
}
if (randomNumber == 1){
    alert("You found a five star resort and live happily ever after. " + "Yay!!!");
      alert("You win!!!");
  }
  else if (randomNumber == 0){
      alert("You stumble upon a tribe of cannibals and they eat you for lunch.");
        alert ("You lose!!!");
  }
  if (action === "build a shelter"){
        alert("You have built a shelter.");
  }
  if (randomNumber == 1){
      alert("Your shelter blew away in the night. " + "You got hypothermia and died. ");
        alert ("You lose!!!");
  }
  else if (randomNumber == 0){
      alert("It's morning, your shelter kept you dry all night");
        var action2 = prompt("what do you do next? " + "Search the island. " + "Search for food ");
          if (action2 = "search the island");
            alert("your searching the island");
}
if (randomNumber == 0){
    alert("You found a five star resort and live happily ever after. " + "Yay!!!");
      alert("You win!!!");
}
else if (randomNumber == 1){
      alert("You stumble upon a tribe of cannibals and they eat you for lunch.");
          alert ("You lose!!!");
}
if (action === "take off your clothes and run around naked"){
  alert("You got hypothermia and died " );
    alert ("You lose!!!");
}

};

islandGame();
