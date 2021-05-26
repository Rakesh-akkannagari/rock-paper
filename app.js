var playbtn = document.querySelector(".play-btn");
var intro = document.querySelector(".intro");
var match = document.querySelector(".match");
playbtn.addEventListener("click", function () {
  intro.classList.add("fadeout");
  match.classList.remove("fadeout");
  match.classList.add("fadein");
});

var reset = document.querySelector(".reset");

var psc = 0;
var csc = 0;

var pscore = document.querySelector(".pscore");
var cscore = document.querySelector(".cscore");

var heading = document.querySelector(".winner");

var btns = document.querySelectorAll(".game-btn");

var pimg = document.querySelector(".player-hand");
var cimg = document.querySelector(".computer-hand");

var moves = ["rock", "paper", "scissors"];

//reset scores
reset.addEventListener("click", () => {
  psc = 0;
  csc = 0;
  pscore.textContent = 0;
  cscore.textContent = 0;
  heading.textContent = "Choose an option";
  pimg.src = "./assets/rock.png";
  cimg.src = "./assets/rock.png";
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var rand = Math.floor(Math.random() * 3);
    var cMove = moves[rand];

    pimg.style.animation = "shakeplayer 1.9s";
    cimg.style.animation = "shakecomputer 1.9s";

    var setImage = this.textContent;
    //update images
    setTimeout(function () {
      pimg.style.animation = "";
      cimg.style.animation = "";

      pimg.src = "./assets/" + setImage + ".png";
      cimg.src = "./assets/" + cMove + ".png";

      compare(setImage, cMove);
    }, 2000);
  });
});

function compare(ps, cs) {
  if (ps == cs) {
    heading.textContent = "That's a tie!";
    return;
  }
  if (ps == "rock") {
    if (cs == "scissors") {
      heading.textContent = "Player Wins!!";
      psc = psc + 1;
      pscore.textContent = psc;
    } else {
      heading.textContent = "Computer Wins!";
      csc++;
      cscore.textContent = csc;
    }
  } else if (ps == "paper") {
    if (cs == "rock") {
      heading.textContent = "Player Wins!!";
      psc = psc + 1;
      pscore.textContent = psc;
    } else {
      heading.textContent = "Computer Wins!";
      csc++;
      cscore.textContent = csc;
    }
  } else if (ps == "scissors") {
    if (cs == "paper") {
      heading.textContent = "Player Wins!!";
      psc = psc + 1;
      pscore.textContent = psc;
    } else {
      heading.textContent = "Computer Wins!";
      csc++;
      cscore.textContent = csc;
    }
  }
}
