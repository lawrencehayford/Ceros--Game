import GameBoard from "./board";

export default class Gamefacade extends GameBoard {
  startGame() {
    /*
     This function calls initGame function to start the game
    */
    this.initGame();
  }

  gameLoop() {
    /*
     This function is recursive and loops its self throughout
     the entire game. it controls the daskboard,skier and even checks
     if skier crashed
    */
    this.paused === true ? this.pauseGame() : this.continueGame();
    this.updateDashbord();
    this.checkSpeedHasUpdated();
    this.checkTotalHits();
    this.ctx.save();
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.clearGameCanvas();
    this.moveSkier();
    this.checkIfSkierHitObstacle();
    this.drawSkier();
    this.drawObstacles();
    this.ctx.restore();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  initGame() {
    /*
     This function initializes the Game and setup
     handlers and  assets
    */
    this.prepareGameCanvas();
    this.setupKeyhandler($(window));
    this.loadAssets().then(() => {
      this.placeInitialObstacles();
      requestAnimationFrame(this.gameLoop.bind(this));
    });
  }
}
