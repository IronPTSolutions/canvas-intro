const canvas = document.querySelector("canvas");

const game = new Game(canvas);

document.addEventListener("keydown", (event) => {
  game.onKeyDown(event.keyCode);
});

document.addEventListener("keyup", (event) => {
  game.onKeyUp(event.keyCode);
});

document.getElementById("start").addEventListener("click", () => {
  game.start();
  document.getElementById("start").remove();
});
