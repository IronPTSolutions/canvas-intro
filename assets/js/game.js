class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.player = new Player(this.ctx);
    this.bg = new Background(this.ctx);
    this.intervalId = null;
    this.running = false;

    this.audio = new Audio();
    this.audio.src = "assets/sound/mw-theme.mp3";
  }

  start() {
    this.running = true;
    this.audio.play();

    this.intervalId = setInterval(() => {
      this.clear();

      this.bg.draw();
      this.player.draw();

      this.bg.move();
      this.player.move();
    }, 1000 / 60);
  }

  stop() {
    this.running = false;
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  onKeyDown(code) {
    this.player.onKeyDown(code);
  }

  onKeyUp(code) {
    this.player.onKeyUp(code);
  }
}
