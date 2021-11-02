class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.player = new Player(this.ctx);
    this.intervalId = null;
    this.running = false;
  }

  start() {
    this.running = true;

    this.intervalId = setInterval(() => {
      this.clear();
      this.player.draw();
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
    // TODO: pasar el evento al player
  }

  onKeyUp(code) {
    // TODO: pasar el evento al player
  }
}
