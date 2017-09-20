
alert ("You are stranded on a deserted island with only a fire starter and a pocket knife. What do you do first?");
var fire = "start a fire";
var shelter = "build a shelter";
var clothes = "take off your clothes and run around naked";
var search = "Search the island";
var food = "forage for food";

var action1 = prompt ("Take off your clothes and run around naked(clothes), start a fire(fire) or build a shelter(shelter)");{
  if (action1 === "fire"){
   alert("You started a fire.");
}

else if(action1 === "shelter") {
alert("you built a shelter.");
}
else if(action1 === "clothes"){
  alert("You got hypothermia and died....You lose");
}
}
if(action1 === "fire"){
  var randomNumber = Math.round(Math.random() * 5);
console.log(randomNumber);
if (randomNumber <= 3){
  alert("It's morning, your fire kept you warm all night. What do you do next?");
}
  else if(randomNumber >= 4){
  alert("You didn't put enough wood on the fire and it went out in the night...");
  alert("you got hypothermia and died...you lose");
  }
}
if(action1 === "shelter"){
  var randomNumber = Math.round(Math.random() * 5);
  console.log(randomNumber);
if (randomNumber <= 3){
    alert("It's morning, your shelter kept you dry all night. What do you do next?");
}
  else if(randomNumber >= 4){
    alert("Your shelter blew away in the night...You got hypothermia and died...you lose");
  }
}
if(randomNumber <= 3){
  var action3 = prompt("search the island(search) or forage for food(food)");
}
var randomNumber = Math.round(Math.random() * 5);
console.log(randomNumber);
if (action3 === "search"){
  alert("Your are searching the island!");
  if(randomNumber <= 3){
    alert("You found a five star resort and live happily ever after!...You win!");
  }
  else if(randomNumber >= 4){
    alert("You stumble upon a tribe of cannibals during a religious ceremony and they eat you for lunch... You lose!");
  }
}
else if(action3 === "food"){
alert("You begin looking for food.");

var randomNumber = Math.round(Math.random() * 5);
console.log(randomNumber);
if(randomNumber <= 3){
  alert("You found a five star resort and live happily ever after!... You win!");
}  else if(randomNumber >= 4){
  alert("While searching the bushes for berries you got bitten by a poisonous snake and died...you lose");
}
}
