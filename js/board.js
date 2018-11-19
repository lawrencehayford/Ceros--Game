const classes = require("extends-classes");
const BaseAssets = new require("../js/assets");
const Controls = new require("../js/controls");

class Board extends classes(BaseAssets, Controls) {
  updateDashbord() {
    /*
     *This methods  updates ths distance , hit and speed to the screen
     */
    document.getElementById("distance").innerHTML =
      Math.ceil(this.skierMapY) + " meters";
    document.getElementById("speed").innerHTML = this.skierSpeed;
    document.getElementById("hits").innerHTML = this.hits;
  }

  checkSpeedHasUpdated() {
    /*
     *This methods  checks if speed has reached time for updating.
     *Speed updates every 5 seconds
     */
    this.skierMapY >= 5000 ? this.updateSpeed() : null;
  }
  updateSpeed() {
    /*
     *This function checks if Skier Speed not more that Max Skier Speed
     */
    document.body.style.backgroundColor = this.speedColor;
    this.skierSpeed < this.maxSkierSpeed ? (this.skierSpeed += 1) : null;
  }
  pauseGame() {
    /*
     *This function displays on screen that game was paused
     */
    document.getElementById("pause").innerHTML = this.pauseNotification;
    this.skierDirection = 0;
  }
  continueGame() {
    /*
     *This function removes game paused from screen
     */
    document.getElementById("pause").innerHTML = "";
  }

  checkTotalHits() {
    /*
     *This function checks total skier hits
     */
    this.hits === this.totalNumberOfHits ? this.gameOver() : null;
  }
  gameOver() {
    /*
     *This function ends the game
     */
    $("#over").modal({
      backdrop: "static",
      keyboard: false
    });
    document.getElementById("score").innerHTML = Math.ceil(this.skierMapY);
    throw "game over";
  }
}
module.exports = Board;
