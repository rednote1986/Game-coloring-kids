const levels = [
  { q:"What color is the apple?", img:"apple", color:"red" },
  { q:"What color is the banana?", img:"banana", color:"yellow" },
  { q:"What color are the grapes?", img:"grape", color:"purple" },
  { q:"What color is the orange?", img:"orange", color:"orange" },
  { q:"What color is the star?", img:"star", color:"yellow" },

  { q:"Is the apple red?", img:"apple", color:"red" },
  { q:"Is the banana yellow?", img:"banana", color:"yellow" },
  { q:"Are the grapes purple?", img:"grape", color:"purple" },
  { q:"Is the orange orange?", img:"orange", color:"orange" },
  { q:"Is the star yellow?", img:"star", color:"yellow" },

  { q:"Color the apple red!", img:"apple", color:"red" },
  { q:"Color the banana yellow!", img:"banana", color:"yellow" },
  { q:"Color the grapes purple!", img:"grape", color:"purple" },
  { q:"Color the orange orange!", img:"orange", color:"orange" },
  { q:"Color the star yellow!", img:"star", color:"yellow" },

  { q:"Apple is red?", img:"apple", color:"red" },
  { q:"Banana is yellow?", img:"banana", color:"yellow" },
  { q:"Grapes are purple?", img:"grape", color:"purple" },
  { q:"Orange is orange?", img:"orange", color:"orange" },
  { q:"Star is yellow?", img:"star", color:"yellow" }
];

let level = 0;

const clickSound   = new Audio("assets/sounds/click.mp3");
const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound   = new Audio("assets/sounds/wrong.mp3");
const finishSound  = new Audio("assets/sounds/finish.mp3");

const voiceCorrect = new Audio("assets/sounds/voice_correct.mp3");
const voiceWrong   = new Audio("assets/sounds/voice_wrong.mp3");

function loadLevel() {
  const data = levels[level];
  document.getElementById("question").innerText = data.q;
  document.getElementById("objectImg").src =
    `assets/images/${data.img}_bw.png`;
  document.getElementById("message").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

function chooseColor(c) {
  clickSound.play();
  const data = levels[level];

  if (c === data.color) {
    document.getElementById("objectImg").src =
      `assets/images/${data.img}_${data.color}.png`;

    document.getElementById("message").innerText =
      "Yay! Great job! ⭐🎉";

    correctSound.play();
    voiceCorrect.play();

    document.getElementById("nextBtn").style.display = "inline-block";
  } else {
    document.getElementById("message").innerText =
      "Oops! Try again 😊";

    wrongSound.play();
    voiceWrong.play();
  }
}

function nextLevel() {
  level++;
  if (level >= levels.length) {
    finishSound.play();
    alert("Awesome! You finished all levels 🎨💖");
    level = 0;
  }
  loadLevel();
}

loadLevel();
