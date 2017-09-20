confirm("Do you want to play my 'Garden game?'");
if(confirm === true){
alert("You standing in your freshly tilled garden and you have a bag of magic seeds");
}else{
  alert("You lose!...Good Day Sir!.");
  alert("I SAID GOOD DAY!");
  throw error;
}var plant =prompt("do you want me to choose which seeds to plant? Yes or no.");
if(plant === "yes"){
  alert("eenie, meenie, miney, mo!");
    var seeds = ["pumpkins", "squash", "tomatoes", "grapes",];
    var pickseeds = seeds[randomNumber(seeds.length -1)];
  function randomNumber(range){
    return Math.round(Math.random() * range);
  }
}
else{
  var money = prompt("Do you want me to plant a magic money tree?");
    if(money === "yes"){
      alert("Money doesn't grow on tree's you idiot!");
      throw error;
    }else if(money === "no"){
      alert("You don't like money?...I guess I'll go take a nap then.");
      throw error;
  }
};

console.log(pickseeds);

switch(pickseeds){
case "pumpkins":
alert("You start planting magic pumpkin seeds");
break;
case "squash":
alert("You start planting magic squash seeds");
break;
case "tomatoes":
alert("You start planting magic tomato seeds");
break;
case "grapes":
alert("You start planting magic grape seeds");
break;
};
var grow = (pickseeds);
  alert("The magic " + grow + " seeds start to grow and instantly bear ripe fruit");

alert("You stare at the " + grow + " in amazement. what do you do next?");
 alert("Pick the " + grow + " and sell them at the farmers market. " + "Pick the " + grow + " and eat them. " +
"Pick the " + grow + " and make " + grow + " vodka.");
var action1 = prompt("market," + " eat," + " vodka");

switch(action1){
  case "market":
  alert("Even though you aren't sure about the side effects of magic "
   + grow + ", you take them to the farmers market. The " + grow + " are like nothing anyone has ever seen and you sell out in a matter of minutes" +
   "Out of nowhere the people that ate the " + grow + " turn into gnomes and start to gather in an angry mob and start to chase you with pitch forks. " +
    " Fearing for your safety you run away screaming. The end." );
  break;
  case "eat":
  alert("You prepare all of the " + grow + " and start to eat " + "the magic " + grow +
  ",  you keep eating till you passout. The end. " );
  break;
  case "vodka":
  alert("You put the " + grow + " in your still and make magic " + grow + " vodka, " +
  "and you throw a big party with all of your friends." + " Everyone loves the magic " + grow +
  " vodka, and they all toast to your health and good fortune. The end.")
  break;
alert("Thank you for playing!!!");
};
