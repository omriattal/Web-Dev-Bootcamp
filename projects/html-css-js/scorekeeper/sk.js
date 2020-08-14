function Player(score, button, display) {
  this.score = score;
  this.button = button;
  this.display = display;
}
const player1 = new Player(
  0,
  document.getElementById("p1"),
  document.getElementById("p1_score")
);
const player2 = new Player(
  0,
  document.querySelector("#p2"),
  document.querySelector("#p2_score")
);

let max_score = 5;
let game_over = false;
const players = [player1, player2];
const reset = document.getElementById("reset");
const score_input = document.querySelector("input");
const max_score_display = document.querySelector("#max_score");

function increment_display(player) {
  if (!game_over) {
    player.score++;
    if (player.score === max_score) {
      game_over = true;
      player.display.classList.add("winner");
    }
    player.display.textContent = player.score;
  }
}

player1.button.addEventListener("click", function () {
  increment_display(player1);
});
player2.button.addEventListener("click", function () {
  increment_display(player2);
});
reset.addEventListener("click", function () {
  for (let player of players) {
    player.score = 0;
    player.display.textContent = "0";
    player.display.classList.remove("winner");
  }
  game_over = false;
});
score_input.addEventListener("change", function () {
  if (game_over) {
    max_score_display.textContent = this.value;
    max_score = parseInt(this.value);
  }
});
