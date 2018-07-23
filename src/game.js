import { Board } from "./board/board";
import { Paddle } from "./paddle/paddle";

export class Game {
  constructor(width, height, id) {
    this.canvas = document.getElementById(id);
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");

    this.gameObjects = [];
  }

  add(gameObject) {
    if (gameObject) {
      this.gameObjects.push(gameObject);
    }
  }

  start() {
    if (this.gameObjects.length) {
      setInterval(() => {
        this.mainLoop();
      }, 5);
    }
  }

  mainLoop() {
    if (this.gameObjects.length) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.gameObjects.forEach(gameObject => {
        gameObject.update();
      });
    }
  }
}

const game = new Game(800, 600, "game");
const board = new Board(game);
const playerPaddle = new Paddle(game, {
  width: 15,
  height: 100,
  color: "white",
  x: 25,
  y: game.canvas.height / 2,
  isPlayer: true
});

game.add(board);
game.add(playerPaddle);
game.start();
