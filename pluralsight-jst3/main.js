
  var outcome;
alert ("You wake up lost on an island.");

var character = {
  s: 0,
  w: 0,
  h: 0,
  name: window.prompt("what is your name?"),
  class: window.prompt("Being lost on an island will test the mental and physical abilities of even the strongest person. " + " What type of skills did you aquire before you were stranded? " + "(choose one: S, D, i.)").toLowerCase()
};
alert("Well, " + character.name + " the brave " + character.class + " you won't survive just sittin on your ass. Look around and see if you can find anything useful.");
alert("Searching...searching...searching");
alert("What did you find?");

var found = ["machete",/* "fire starter","parachord","rubber chicken"*/ ];
  var tool = found[randomNumber(found.length - 1 )];
function randomNumber(range){
  return Math.round(Math.random() * range);
}
console.log(tool);
alert("You found a " + tool + ",  that should be very useful.");
  alert("Since you found a " + tool + " I suggest you...");
switch(tool) {
  case "machete":
  alert("Cut some palm leaves and build a shelter.");
  break;
  case "fire starter":
  alert("Gather some wood and build a fire");
  break;
  case "parachord":
  alert("Make a snare to see if you can catch an amimal to eat...of course that won't do much good without a fire...I'm just sayin.");
  break;
  case "rubber chicken":
  alert("Wait, a rubber chicken?! Oh my god you are sooo screwed!");
  break;
}
var action1 = tool;
    if(character.class === "s") {
      character.s = 5;
      character.w = 5;
      character.h = 0;
   }if(character.class === "d"){
     character.s = 0;
     character.w = 5;
     character.h = 5;
   }if(character.class === "i"){
     character.s = 5;
     character.w = 0;
     character.h = 5;
   }if(action1 === "machete") {
    if(character.s === 5) {
      alert("That machete came in pretty handy. You built a sturdy shelter that kept you warm all night.");
      outcome = "next";
    }else if(action1 === "machete"){
      if(character.s < 5) {
        alert("You should have spent more time in the gym, I've never seen anyone so weak they couldn't chop stuff with a machete. Since you didn't get a shelter built you got hypothermia and died.");
        outcome = "lose";
        }
      }
    }if(action1 === "fire starter") {
      if(character.w === 5) {
    alert("Wow, it took you a while but you finally got the hang of that fire starter. Your fire kept you warm all night.");
      outcome = "next";
    }else if(action1 === "fire starter"){
      if(character.w < 5) {
        alert("You just didn't have it in you to get that fire started did you? Don't you wish you had spent more time outside learning to be a real man?");
      outcome = "lose";
      }
    }
  }if(action1 === "parachord") {
    if(character.h === 5) {
      alert("Holy cow! You used the parachord to make a shelter out of dried seaweed? It's a good thing you didn't take my advice or you would have gotten hypothermia and died.");
      outcome = "next";
    }else if(action1 === "parachord"){
      if(character.h < 5) {
      alert("I can't believe you actually made a snare with the parachord! you didn't even have any bait! That's to bad, because you got hypothermia and died.");
      outcome = "lose";
      }
    }
  }if(action1 === "rubber chicken") {
    if(character.w < 5 || character.s < 5 || character.h < 5){
      alert("Ha ha ha, a rubber chicken! Oh my god! You should have searched a lot harder. Ha ha ha, I sure hope you weren't expecting to win, because if you did your dumber than I thought. ");
      outcome = "lose";
    }
  }if(outcome === "next"){
    alert("If you keep this up you just might survive!");
  }var next = prompt("What do you want to do next? Search the island (island), search for food? (food) or scale the nearby cliff to see what you can see.(cliff)");
    if(next === "island") {
    alert("You begin searching the island");
    var action2 = prompt("You stumble upon a tribe of cannibals during a religious ceremony. They see you, what do you do? Try to out run them?(r) Try to talk them out of eating you.(t) Suck in your gut and try not to look tastey.(s)");
    if(action2 === "r") {
      if(character.w < 5) {
        alert("You run away as fast as you can! You run to the other side of the island with them hot on your heels, you see some fishermen just off shore and swim out to their boat while spears are flying past you. Whew! that was close.");
        outcome = "win";
      }else if(action2 === "r"){
        if(character.w === 5){
          alert("You run and run as fast as you can, but you run into a tree and they cook you like Spam!");
          outcome = "lose";
        }
      }
    }else if(action2 === "t"){
      if(character.w === 5){
          alert("You start babbling incoherently and accidentaly end up speaking their language. You tell them you are their god and if they don't let you go you will make them disappear. Scared out of their minds they send you down a long trail. You walk for a while and end up at a Sands resort and live happily ever after.");
          outcome = "win";
        }else if(character.w < 5){
          alert("You don't know how to speak their language! They tie you up and build a large fire and start to argue whether they shoud have Que or Stew.");
          outcome = "lose";
        }
      }else if(action2 === "s"){
        if(character.w === 5 || character.h === 5 || character.s === 5) {
        alert("You smile and suck in your gut, but it's to late they have surrounded you and have started chopping vegetables for what should be some 'perty tashtey shtew'.");
        outcome = "lose";
          }
        }
      }if(next === "food") {
    alert("You begin searching for food.");
    var action3 = prompt("You realize there are plenty of fish in the sea, so you go down to the beach. What do you do? Wait for the tide to go out and collect the animals from the tide pools?(tide) Wad out into the ocean to see if you can catch a fish?(swim)");
    if(action3 === "tide") {
      if(character.w === 5 || character.s === 5 || character.h === 5) {
        alert("The tide goes out and you find lots of muscles and oysters to eat. With a full belly you lay on the beach and fall asleep under a palm tree. A boat full of tourists happens by and they take you home...After making sure you aren't a cannibal of course.");
      outcome = "win";
      }
    }else if(action3 === "swim") {
      if(character.s < 5) {
        alert("You wade out into the ocean to see if you can catch a fish with your bare hands. You see a long snake like fish and grab ahold of it. It's an electric eel, it electrocutes you. Paralized by the shock of what just happen you fall into the ocean and drown.");
        outcome = "lose";
    }else if(action3 === "swim"){
      if(character.s === 5){
        alert("You wade out into the ocean and patiently wait till a fish swims by and grab it with your bare hands and have sushi for breakfast. Yummy! With a full belly you lay on the beach and fall asleep under a palm tree. A boat full of tourists happens by and they take you home...After making sure you aren't a cannibal of course.");
        outcome = "win";
      }
    }
  }
}if(next === "cliff") {
  var action4 = prompt("You begin to walk toward the cliff, what do you do next? Tuck your tail between your legs and look for an easier way to the top.(top) Pound your chest like Tarzan and begin to scale the cliff wall.(scale)");
    if(action4 === "top") {
      if(character.w === 5 || character.h === 5 || character.s === 5) {
        alert("You get to the bottom of the cliff and realize that you aren't Sir Edmund Hillary and that 'because it's there' is a dumb reason to die. You start walking away and come across a well used trail with a sign that say's 'to top of cliff'. You get to the top of the cliff and discover a five star resort with an open bar! You live happily ever after...Waisted 24/7...but happy.");
        outcome = "win";
    }
  }else if(action4 === "scale") {
    if(character.s < 5) {
      alert("To cocky to see if there is an easier way up you begin to scale the cliff wall. You almost get to the top when you lose your foot hold because you slipped on some fresh bird poop. You fall several hundred feet to the razor sharp rocks below and die.");
      outcome = "lose";
    }else if(action4 === "scale"){
      if(character.s === 5){
      alert("You scale the cliff with ease. You get to the top of the cliff and discover a five star resort with an open bar! You live happily ever after...Waisted 24/7...but happy.");
      outcome = "win";
        }
      }
    }
  }if (outcome === "lose") {
      alert("You lose!");
    }else if(outcome === "win"){
      alert("You Win!");
    }
