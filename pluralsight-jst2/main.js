alert("You standing in your freshly tilled garden and you have a bag of magic seeds");
var plant =prompt("do you want me to choose which seeds to plant? Yes or no.");
if(plant === "yes"){
  alert("eenie, meenie, miney, mo!");
  var seeds = ["pumpkin", "squash", "tomato", "rhubarb",];
  var pickseeds = seeds[randomNumber(seeds.length -1)];
  function randomNumber(range){
    return Math.round(Math.random() * range);
  }
}
else{
  var money = prompt("Do you want me to plant a magic money tree?");
    if(money === "yes"){
      alert("Money doesn't grow on tree's you idiot!");
    }else if(money === "no"){
      alert("You don't like money?...I guess I'll go take a nap then.");
      throw error("the end");
  }
};

console.log(pickseeds);

switch(pickseeds){
case "pumpkin":
alert("You start planting magic pumpkin seeds");
break;
case "squash":
alert("You start planting magic squash seeds");
break;
case "tomato":
alert("You start planting magic tomato seeds");
break;
case "rhubarb":
alert("You start planting magic rhubarb seeds");
break;
};
var grow = (pickseeds);
alert("The magic " + grow + " seeds start to grow and instantly bear ripe fruit");
