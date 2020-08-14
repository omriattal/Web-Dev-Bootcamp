let squares = document.querySelectorAll(".square");
let message = document.querySelector("#message");
let headline = document.querySelector("#headline");
let target_color_msg = document.querySelector("#target_msg");
let reset = document.getElementById("reset");
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");

const backgroundColor = "#232323";
const headlineColor = "steelblue";

let numOfSquares = 6;
colors = initColors(numOfSquares);

function initColors(length) {
  let colors = [];
  for (let i = 0; i < length; i++) {
    colors[i] = createRandomColor();
  }
  target_color = colors[Math.floor(Math.random() * length)];
  target_color_msg.textContent = target_color;
  return colors;
}
function changeAllColors(color) {
  for (let square of squares) {
    square.style.backgroundColor = color;
  }
}

easy.addEventListener("click", function () {
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numOfSquares = 3;
  colors = initColors(numOfSquares);
  for (let i = 0; i < squares.length; i++) {
    if (i < 3) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hard.addEventListener("click", function () {
  hard.classList.add("selected");
  easy.classList.remove("selected");
  numOfSquares = 6;
  colors = initColors(numOfSquares);
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clicked_color = this.style.backgroundColor;
    if (clicked_color === target_color) {
      message.textContent = "Correct!";
      changeAllColors(target_color);
      headline.style.backgroundColor = target_color;
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = backgroundColor;
      message.textContent = "Wrong!";
    }
  });
}
reset.addEventListener("click", function () {
  colors = initColors(numOfSquares);
  headline.style.backgroundColor = headlineColor;
  reset.textContent = "New Colors";
  message.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

/*
AUXILLARY FUNCTIONS
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRandomColor() {
  let red = getRandomInt(0, 255);
  let green = getRandomInt(0, 255);
  let blue = getRandomInt(0, 255);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
