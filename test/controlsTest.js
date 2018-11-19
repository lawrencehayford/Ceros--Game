const assert = require("chai").assert;
const Controls = new require("../js/controls");
controls = new Controls();

describe("Controls Test", () => {
  it("Move Skier Test", () => {
    assert.equal(controls.moveSkier(), "hello");
  });

  it("Get Skier Asset Test", () => {
    assert.equal(controls.getSkierAsset(), "hello");
  });

  it("Draw Skier Test", () => {
    assert.equal(controls.drawSkier(), "hello");
  });

  it("Intersect Rec Test", () => {
    assert.equal(controls.drawSkier(), "hello");
  });

  it("Check If Skier Hit Obstacle Test", () => {
    assert.equal(controls.checkIfSkierHitObstacle(), "hello");
  });

  //   it("Draw Obstacle Test", () => {
  //     assert.equal(controls.drawObstacles(), "hello");
  //   });

  //   it("place Initial Obstacles Test", () => {
  //     assert.equal(controls.placeInitialObstacles(), "hello");
  //   });

  //   it("place New Obstacles Test", () => {
  //     assert.equal(controls.placeNewObstacle(1), "hello");
  //   });

  //   it("place Random Obstacles Test", () => {
  //     assert.equal(controls.placeRandomObstacle(1, 2, 3, 4), "hello");
  //   });

  //   it("Calculate Open Position Test", () => {
  //     assert.equal(controls.calculateOpenPosition(1, 2, 3, 4), "hello");
  //   });
});
