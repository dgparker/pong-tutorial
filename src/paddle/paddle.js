export class Paddle {
  constructor(game, config) {
    this.canvas = game.canvas;
    this.ctx = game.ctx;

    this.width = config.width;
    this.height = config.height;
    this.color = config.color;
    this.x = config.x;
    this.y = config.y;
    this.speedX = 0;
    this.speedY = 0;

    if (config.isPlayer) {
      this.addKeyListeners();
    }
  }

  addKeyListeners() {
    window.addEventListener("keydown", e => {
      this.move(e.keyCode);
    });

    window.addEventListener("keyup", e => {
      this.move(false);
    });
  }

  move(key) {
    if (key && key === 87) {
      this.speedY = -5;
    } else if (key && key === 83) {
      this.speedY = 5;
    } else {
      this.speedY = 0;
    }
  }

  adjustPosition() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.adjustPosition();
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
