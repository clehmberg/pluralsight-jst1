var sign = prompt("what is your astrological sign?").toLowerCase();
alert ("Sensing...sensing your future.");
switch(sign) {
  case "taurus":
  alert ("Your day will be awesome!");
  break;
  case "virgo":
  alert ("Your day will be rainy");
  break;
  case "leo":
  alert ("Your day will suck");
  break;
  default:
  alert ("please enter a valid sign");
  break;
}
