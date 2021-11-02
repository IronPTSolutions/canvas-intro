const canvas = document.querySelector("canvas");

const game = new Game(canvas);

game.start();

document.addEventListener("keydown", (event) => {
  game.onKeyDown(event.keyCode);
});

document.addEventListener("keyup", (event) => {
  game.onKeyUp(event.keyCode);
});
