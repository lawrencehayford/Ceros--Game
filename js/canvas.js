export default class Canvas {
  prepareGameCanvas(Asset) {
    /*
     * This function prepares the width and height of Canvas
     */
    Asset.gameWidth = window.innerWidth;
    Asset.gameHeight = window.innerHeight;
    Asset.canvas = $("<canvas ></canvas>")
      .attr("width", Asset.gameWidth * window.devicePixelRatio)
      .attr("height", Asset.gameHeight * window.devicePixelRatio)
      .css({ width: Asset.gameWidth + "px", height: Asset.gameHeight + "px" });
    $("body").append(Asset.canvas);
    Asset.ctx = Asset.canvas[0].getContext("2d");
  }

  clearGameCanvas(Asset) {
    /*
     * This function is responsible for clearing the main canvas
     */
    Asset.ctx.clearRect(0, 0, Asset.gameWidth, Asset.gameHeight);
  }
}
