class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
  }

  draw() {
    // TODO
    this.ctx.fillRect(0, 0, 0, 0);
  }

  move() {
    // TODO: sumar acelación a la velocidad
    // TODO: sumar velocidad a la posición

    // TODO: toca la derecha?
    if (true) {
      this.vx = -this.vx;
    }

    // TODO: toca la izquierda?
    if (true) {
      this.vx = -this.vx;
    }

    // TODO: toca el suelo?
    if (true) {
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
    }

    // TODO: toca el techo?
    if (true) {
      this.vy = -this.vy;
    }
  }

  onKeyDown(code) {
    if (code === RIGHT_KEY) {
      // TODO
    }

    if (code === LEFT_KEY) {
      // TODO
    }

    if (code === TOP_KEY) {
      // TODO
    }
  }

  onKeyUp(code) {
    if (code === RIGHT_KEY || code === LEFT_KEY) {
      // TODO
    }
  }
}
