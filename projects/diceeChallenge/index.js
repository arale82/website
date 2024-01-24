//random number
var rdmNum1 = Math.floor(Math.random()*6)+1;
var rdmNum2 = Math.floor(Math.random()*6)+1;

//add src attribute
document.querySelector(".img1").setAttribute("src","./images/dice"+rdmNum1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+rdmNum2+".png");

//change title of the page
var titleH1 = document.querySelector("h1");
var trophyHtml = "<span class='material-symbols-outlined' style='font-size:5rem'>trophy</span>";
if (rdmNum1 === rdmNum2){
  titleH1.innerHTML = "Draw!";
} else if (rdmNum1 > rdmNum2) {
  titleH1.innerHTML = trophyHtml+"Player 1 Wins!";
} else if (rdmNum2 > rdmNum1) {
  titleH1.innerHTML = "Player 2 Wins!"+trophyHtml;
}

//OBJECTS
function HouseKeeper (name, age, yearsExperience, skills) {
  this.name = name;
  this.age = age;
  this.yearsExperience = yearsExperience;
  this.skills = skills;
  this.clean = new function () {
    console.log(name + " is cleaning.");
  };
}

var houseKeeper1 = new HouseKeeper("Fran", 33, 5, ["bedroom", "bathroom", "lobby"]);
var houseKeeper2 = new HouseKeeper("Leia", 66, 33, ["kitchen", "bedroom", "bathroom", "lobby"]);

