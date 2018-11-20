const Controls = require("../js/controls");

beforeEach(() => {
  controls = new Controls();
  controls.skierDirection = 2;
});

describe("Controls Test", () => {
  test("Get Skier Asset", () => {
    expect(controls.getSkierAsset().length).toBeGreaterThanOrEqual(1);
  });

  test("Move Skier Test", () => {
    expect(controls.moveSkier()).toBeUndefined();
  });

  test("Draw Skier Test", () => {
    expect(controls.drawSkier()).toBeUndefined();
  });

  test("Intersect Rec Test", () => {
    let obstacleRect1 = {
      left: 2,
      right: 7,
      top: 5,
      bottom: 10
    };

    let obstacleRect2 = {
      left: 3,
      right: 6,
      top: 8,
      bottom: 9
    };
    expect(controls.intersectRect(obstacleRect1, obstacleRect2)).toBeTruthy();
  });

  test("Check If Skier Hit Obstacle Test", () => {
    expect(controls.checkIfSkierHitObstacle()).toBeUndefined();
  });
});
