let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const playgame = (userchoice) => {
  // console.log("user choice=", userchoice);
  const computerchoice = gencompchoice();
  // console.log("computerchoice=", computerchoice);

  if (userchoice === computerchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissor,paper
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //Rock,scissor
      userwin = computerchoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userwin = computerchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, computerchoice);
  }
};

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randix = Math.floor(Math.random() * 3);
  return options[randix];
};

const drawgame = () => {
  msg.innerText = "game is draw play again";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you win! your  ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lose!  ${computerchoice} beats your  ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was clicked", userchoice);
    playgame(userchoice);
  });
});
