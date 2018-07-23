export class Board {
  constructor(game) {
    this.canvas = game.canvas;
    this.ctx = game.ctx;
  }

  renderCenterLine() {
    this.ctx.beginPath();
    this.ctx.setLineDash([5, 5]);
    this.ctx.moveTo(400, 0);
    this.ctx.lineTo(400, 625);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }

  renderScoreBoard() {
    this.ctx.fillStyle = "white";
    this.updateScore({ playerOne: 0, playerTwo: 0 });
  }

  updateScore(score) {
    this.ctx.font = "30px Arial";
    this.ctx.fillText(score.playerOne, this.canvas.width / 2 - 75, 30);

    this.ctx.font = "30px Arial";
    this.ctx.fillText(score.playerTwo, this.canvas.width / 2 + 75, 30);
  }

  update() {
    this.renderCenterLine();
    this.renderScoreBoard();
  }
}
