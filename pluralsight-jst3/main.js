

var myCoffee = {
flavor: "espresso",
temprature: "piping hot",
ounces: 100,
milk: true,

reheat: function () {
  if(myCoffee.temprature === "cold"){
    myCoffee.temprature = "piping hot";
    alert("Your coffee has been reheated");
  }
}

};

myCoffee.temprature = "cold";
myCoffee["temprature"] = "lukewarm";

myCoffee.reheat();
