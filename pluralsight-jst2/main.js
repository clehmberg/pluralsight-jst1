var sad = confirm ("would you like to be cheered up?");

while (sad) {
  alert("what do you call a boomerang that doesn;t come back?...A stick!");
  var yes = confirm ("Would you like to continue our session?");

  if (yes) {
    var response = prompt ("Tell me about your troubles:", "Type your feelings here");

    if (response){
      alert ("I am sorry you are feeling down about that. I know you can't see it, but I, the computer, will now give you a hug.  **hug**");
      sad = false;
    }
  }else {
    sad = false;
  }
}
