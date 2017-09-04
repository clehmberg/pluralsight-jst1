alert("You have just been marooned on a deserted island. " + "You only have a pocket knife and a fire starter. " + "What do you do first?");
var action = prompt("Take off your clothes and run around naked. " + "Start a fire. " + "Build a shelter.");
//var randomNumber = Math.round(Math.random());

//alert(action);

if (action === "start a fire" ){
  alert("You built a fire to stay warm.");
}else if (action === "build a shelter" ) {
  alert("You have built a shelter to stay dry.");
}else if (action === "take off your clothes and run around naked"){
  alert("You got hypothermia and died " + "You lose!!!")
}
