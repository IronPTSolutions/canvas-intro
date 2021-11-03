class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 100;
    this.w = 40;
    this.h = 50;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0.2;

    this.img = new Image();
    this.img.src = "assets/img/mario.sprite.png";
    this.img.frameIndex = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frameIndex * this.img.width) / 3,
      0,
      this.img.width / 3,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.vy += this.ay;
    this.y += this.vy;
    this.x += this.vx;

    if (this.x + this.w >= this.ctx.canvas.width) {
      this.vx = -this.vx;
    }

    if (this.x <= 0) {
      this.vx = -this.vx;
    }

    if (this.y + this.h >= this.ctx.canvas.height - 42) {
      this.y = this.ctx.canvas.height - this.h - 42;
      this.vy = 0;
    }

    if (this.y <= 0) {
      this.vy = -this.vy;
    }

    this.tick += 1;

    if (this.tick % 10 === 0) {
      this.img.frameIndex += 1;

      if (this.img.frameIndex > 2) {
        this.img.frameIndex = 0;
      }
    }
  }

  onKeyDown(code) {
    if (code === RIGHT_KEY) {
      this.vx = 10;
    }

    if (code === LEFT_KEY) {
      this.vx = -10;
    }

    if (code === TOP_KEY) {
      this.vy = -10;
    }
  }

  onKeyUp(code) {
    if (code === RIGHT_KEY || code === LEFT_KEY) {
      this.vx = 0;
    }
  }
}
