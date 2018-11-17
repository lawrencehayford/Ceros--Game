export default class Assets {
  constructor() {
    this.assets = {
      skierCrash: "img/skier_crash.png",
      skierLeft: "img/skier_left.png",
      skierLeftDown: "img/skier_left_down.png",
      skierDown: "img/skier_down.png",
      skierRightDown: "img/skier_right_down.png",
      skierRight: "img/skier_right.png",
      tree: "img/tree_1.png",
      treeCluster: "img/tree_cluster.png",
      rock1: "img/rock_1.png",
      rock2: "img/rock_2.png"
    };

    this.loadedAssets = {};
    this.obstacleTypes = ["tree", "treeCluster", "rock1", "rock2"];
    this.obstacles = [];
    this.gameWidth = window.innerWidth;
    this.gameHeight = window.innerHeight;
    this.canvas = $("<canvas class='canvasTop'></canvas>")
      .attr("width", this.gameWidth * window.devicePixelRatio)
      .attr("height", this.gameHeight * window.devicePixelRatio)
      .css({
        width: this.gameWidth + "px",
        height: this.gameHeight + "px"
      });
    $("body").append(this.canvas);
    this.ctx = this.canvas[0].getContext("2d");
    this.skierDirection = 5;
    this.skierMapX = 0;
    this.skierMapY = 0;
    this.skierSpeed = 8;
    this.maxSkierSpeed = 16;
    this.hits = 0;
    this.totalNumberOfHits = 3;
    this.paused = false;
    this.pauseNotification = "<h2 class='whiteColor'>Game Is Paused</h2>";
    this.speedColor = "#111619";
  }
  loadAssets() {
    let assetPromises = [];
    _.each(this.assets, (asset, assetName) => {
      let assetImage = new Image();
      let assetDeferred = new $.Deferred();

      assetImage.onload = () => {
        assetImage.width /= 2;
        assetImage.height /= 2;
        this.loadedAssets[assetName] = assetImage;
        assetDeferred.resolve();
      };
      assetImage.src = asset;
      assetPromises.push(assetDeferred.promise());
    });
    return $.when.apply($, assetPromises);
  }
}
