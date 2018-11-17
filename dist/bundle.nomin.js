/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Extends Classes.
 *
 * Main entry file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 30/03/2017 NZDT
 */

module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Extends Classes.
 *
 * Main application file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 30/03/2017 NZDT
 */

/**
 * Module dependencies.
 */

const MethodMissing = __webpack_require__(2);

/**
 * Main multi-class function.
 *
 * @param {any} args
 * @returns
 */

function classes(...args) {
  const constructors = [];

  /**
   * Skeleton Class.
   *
   * @class Class
   * @extends {MethodMissing}
   */

  class Class extends MethodMissing {

    /**
     * Creates an instance of Class.
     *
     * @memberOf Class
     */

    constructor(...opts) {
      super();

      for (const arg of args) {
        const props = Object.getOwnPropertyNames(arg.prototype);

        for (const prop of props) {
          if (prop === 'constructor') {
            constructors.push(arg.prototype.constructor);
          } else {
            Class.prototype[prop] = arg.prototype[prop];
          }
        }
      }

      for (const constructor of constructors) {
        Object.assign(Class.prototype, new constructor(...opts));
      }
    }

  }

  return Class;
}

/**
 * Module exports.
 */

module.exports = classes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Method Missing.
 *
 * Application entry file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Method Missing.
 *
 * Main application file.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */

/**
 * Module dependencies.
 */

const proxy = __webpack_require__(4);

/**
 * MethodMissing Class
 *
 * @class MethodMissing
 */

class MethodMissing {

  /**
   * Creates an instance of MethodMissing.
   * @param {any} method
   *
   * @memberOf MethodMissing
   */

  constructor(method) {
    return proxy(this, method || '__call');
  }

  /**
   * Static method handler.
   *
   * @static
   * @param {any} that
   * @param {any} method
   * @returns
   *
   * @memberOf MethodMissing
   */

  static static(that, method) {
    return proxy(that, method || '__call');
  }

}

/**
 * Module exports.
 */

module.exports = MethodMissing;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Method Missing.
 *
 * Main application entry.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */

/**
 * Module dependencies.
 */

const MethodMissingError = __webpack_require__(5);

/**
 * Main proxy handler.
 *
 * @param {object} Class
 * @param {string} method
 */

function proxy(Class, method) {

  return new Proxy(Class, {
    get(obj, prop) {
      if (Reflect.has(obj, prop)) {
        return Reflect.get(obj, prop);
      } else if (typeof method === 'function') {
        return function methodMissing(...args) {
          method.call(this, prop, args);
        };
      } else if (Reflect.has(obj, method)) {
        return function methodMissing(...args) {
          obj[method].call(this, prop, args);
        };
      }
      const err = `${method}, use method '__call(method, args)' in your class to catch.`;
      throw new MethodMissingError(err);
    }

  });
}

/**
 * Module exports.
 */

module.exports = proxy;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*!
 * Method Missing Error.
 *
 * Main application entry.
 * @author Jarrad Seers <jarrad@seers.me>
 * @created 29/03/2017 NZDT
 */

/**
 * Method Missing Error.
 *
 * @class MethodMissingError
 * @extends {Error}
 */

class MethodMissingError extends Error {

  /**
   * Creates an instance of MethodMissingError.
   * @param {any} msg
   *
   * @memberOf MethodMissingError
   */

  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

}

/**
 * Module exports.
 */

module.exports = MethodMissingError;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./js/assets.js
class Assets {
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
    this.canvas = $("<canvas class='canvasTop'></canvas>").attr("width", this.gameWidth * window.devicePixelRatio).attr("height", this.gameHeight * window.devicePixelRatio).css({
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
// CONCATENATED MODULE: ./js/controls.js

class controls_Controls extends Assets {
  moveSkier() {
    switch (this.skierDirection) {
      case 2:
        this.skierMapX -= Math.round(this.skierSpeed / 1.4142);
        this.skierMapY += Math.round(this.skierSpeed / 1.4142);

        this.placeNewObstacle(this.skierDirection);
        break;
      case 3:
        this.skierMapY += this.skierSpeed;

        this.placeNewObstacle(this.skierDirection);
        break;
      case 4:
        this.skierMapX += this.skierSpeed / 1.4142;
        this.skierMapY += this.skierSpeed / 1.4142;

        this.placeNewObstacle(this.skierDirection);
        break;
    }
  }

  getSkierAsset() {
    let skierAssetName;
    switch (this.skierDirection) {
      case 0:
        skierAssetName = "skierCrash";
        break;
      case 1:
        skierAssetName = "skierLeft";
        break;
      case 2:
        skierAssetName = "skierLeftDown";
        break;
      case 3:
        skierAssetName = "skierDown";
        break;
      case 4:
        skierAssetName = "skierRightDown";
        break;
      case 5:
        skierAssetName = "skierRight";
        break;
    }

    return skierAssetName;
  }

  drawSkier() {
    let skierAssetName = this.getSkierAsset();
    let skierImage = this.loadedAssets[skierAssetName];
    if (skierImage == undefined) {
      return;
    }
    let x = (this.gameWidth - skierImage.width) / 2;
    let y = (this.gameHeight - skierImage.height) / 2;

    this.ctx.drawImage(skierImage, x, y, skierImage.width, skierImage.height);
  }

  intersectRect(r1, r2) {
    return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
  }

  checkIfSkierHitObstacle() {
    let skierAssetName = this.getSkierAsset();
    let skierImage = this.loadedAssets[skierAssetName];
    if (skierImage == undefined) {
      return;
    }
    let skierRect = {
      left: this.skierMapX + this.gameWidth / 2,
      right: this.skierMapX + skierImage.width + this.gameWidth / 2,
      top: this.skierMapY + skierImage.height - 5 + this.gameHeight / 2,
      bottom: this.skierMapY + skierImage.height + this.gameHeight / 2
    };

    let collision = _.find(this.obstacles, obstacle => {
      let obstacleImage = this.loadedAssets[obstacle.type];
      let obstacleRect = {
        left: obstacle.x,
        right: obstacle.x + obstacleImage.width,
        top: obstacle.y + obstacleImage.height - 5,
        bottom: obstacle.y + obstacleImage.height
      };

      return this.intersectRect(skierRect, obstacleRect);
    });

    if (collision) {
      this.skierDirection != 0 ? this.hits += 1 : null;
      this.skierDirection = 0;
    }
  }

  setupKeyhandler() {
    $(window).keydown(event => {
      switch (event.which) {
        case 37:
          // left
          if (this.skierDirection === 1) {
            this.skierMapX -= this.skierSpeed;
            this.placeNewObstacle(this.skierDirection);
          } else {
            this.skierDirection--;
          }
          event.preventDefault();
          break;
        case 39:
          // right
          if (this.skierDirection === 5) {
            this.skierMapX += this.skierSpeed;
            this.placeNewObstacle(this.skierDirection);
          } else {
            this.skierDirection++;
          }
          event.preventDefault();
          break;
        case 38:
          // up
          if (this.skierDirection === 1 || this.skierDirection === 5) {
            this.skierMapY -= this.skierSpeed;
            this.placeNewObstacle(6);
          }
          event.preventDefault();
          break;
        case 40:
          // down
          this.skierDirection = 3;
          event.preventDefault();
          break;
        case 32:
          // pause
          this.paused === false ? this.paused = true : this.paused = false;
          event.preventDefault();
          break;
      }
    });
  }

  drawObstacles() {
    let newObstacles = [];
    _.each(this.obstacles, obstacle => {
      let obstacleImage = this.loadedAssets[obstacle.type];
      let x = obstacle.x - this.skierMapX - obstacleImage.width / 2;
      let y = obstacle.y - this.skierMapY - obstacleImage.height / 2;
      if (x < -100 || x > this.gameWidth + 50 || y < -100 || y > this.gameHeight + 50) {
        return;
      }

      this.ctx.drawImage(obstacleImage, x, y, obstacleImage.width, obstacleImage.height);
      newObstacles.push(obstacle);
    });
    this.obstacles = newObstacles;
  }

  placeInitialObstacles() {
    let numberObstacles = Math.ceil(_.random(5, 7) * (this.gameWidth / 800) * (this.gameHeight / 500));

    let minX = -50;
    let maxX = this.gameWidth + 50;
    let minY = this.gameHeight / 2 + 100;
    let maxY = this.gameHeight + 50;

    for (let i = 0; i < numberObstacles; i++) {
      this.placeRandomObstacle(minX, maxX, minY, maxY);
    }

    this.obstacles = _.sortBy(this.obstacles, obstacle => {
      let obstacleImage = this.loadedAssets[obstacle.type];
      return obstacle.y + obstacleImage.height;
    });
  }

  placeNewObstacle(direction) {
    let shouldPlaceObstacle = _.random(1, 8);
    if (shouldPlaceObstacle !== 8) {
      return;
    }

    let leftEdge = this.skierMapX;
    let rightEdge = this.skierMapX + this.gameWidth;
    let topEdge = this.skierMapY;
    let bottomEdge = this.skierMapY + this.gameHeight;

    switch (direction) {
      case 1:
        // left
        this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);
        break;
      case 2:
        // left down
        this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);
        this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
        break;
      case 3:
        // down
        this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
        break;
      case 4:
        // right down
        this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);
        this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
        break;
      case 5:
        // right
        this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);
        break;
      case 6:
        // up
        this.placeRandomObstacle(leftEdge, rightEdge, topEdge - 50, topEdge);
        break;
    }
  }

  placeRandomObstacle(minX, maxX, minY, maxY) {
    let obstacleIndex = _.random(0, this.obstacleTypes.length - 1);

    let position = this.calculateOpenPosition(minX, maxX, minY, maxY);

    this.obstacles.push({
      type: this.obstacleTypes[obstacleIndex],
      x: position.x,
      y: position.y
    });
  }

  calculateOpenPosition(minX, maxX, minY, maxY) {
    let x = _.random(minX, maxX);
    let y = _.random(minY, maxY);

    let foundCollision = _.find(this.obstacles, obstacle => {
      return x > obstacle.x - 50 && x < obstacle.x + 50 && y > obstacle.y - 50 && y < obstacle.y + 50;
    });

    if (foundCollision) {
      return this.calculateOpenPosition(minX, maxX, minY, maxY);
    } else {
      return {
        x: x,
        y: y
      };
    }
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
  }
}
// CONCATENATED MODULE: ./js/board.js
const classes = __webpack_require__(0);



class board_Board extends classes(Assets, controls_Controls) {
  updateDashbord() {
    /*
     *This methods  updates ths distance , hit and speed to the screen
     */
    document.getElementById("distance").innerHTML = Math.ceil(this.skierMapY) + " meters";
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
    this.skierSpeed < this.maxSkierSpeed ? this.skierSpeed += 1 : null;
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
// CONCATENATED MODULE: ./js/gameFacade.js


class gameFacade_Gamefacade extends board_Board {
  startGame() {
    /*
     * This function calls initGame function to start the game
     */
    this.initGame();
  }

  gameLoop() {
    /*
     * This function is recurisive and loops its self throughout
     * the entire game. it controls the daskboard,skier and even checks
     * if skier crashed
     */
    this.paused === true ? this.pauseGame() : this.continueGame();
    this.updateDashbord();
    this.checkSpeedHasUpdated();
    this.checkTotalHits();
    this.ctx.save();
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.clearCanvas();
    this.moveSkier();
    this.checkIfSkierHitObstacle();
    this.drawSkier();
    this.drawObstacles();
    this.ctx.restore();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  initGame() {
    /*
     * This function initializes the Game and setup
     * handlers and assets
     */
    this.setupKeyhandler();
    this.loadAssets().then(() => {
      this.placeInitialObstacles();
      requestAnimationFrame(this.gameLoop.bind(this));
    });
  }
}
// CONCATENATED MODULE: ./js/entry.js

let game = new gameFacade_Gamefacade();
game.startGame();

/***/ })
/******/ ]);