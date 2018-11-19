const Controls = require("../js/controls");

beforeEach(() => {
  controls = new Controls();
});

describe("Controls Test", () => {
  test("Move Skier Test", () => {
    controls.skierDirection = 2;
    controls.moveSkier();
    expect(controls.moveSkier()).toBe(undefined);
  });

  // test("Get Skier Asset Test", () => {
  //   expect(controls.getSkierAsset()).toBe("Hello");
  // });

  // test("Draw Skier Test", () => {
  //   expect(controls.drawSkier()).toBe("Hello");
  // });

  // test("Intersect Rec Test", () => {
  //   expect(controls.drawSkier()).toBe("Hello");
  // });

  // test("Check If Skier Hit Obstacle Test", () => {
  //   expect(controls.checkIfSkierHitObstacle()).toBe("Hello");
  // });

  //   it("Draw Obstacle Test", () => {
  //     expect(controls.drawObstacles()).toBe("Hello");
  //   });

  //   it("place Initial Obstacles Test", () => {
  //     expect(controls.placeInitialObstacles()).toBe("Hello");
  //   });

  //   it("place New Obstacles Test", () => {
  //     expect(controls.placeNewObstacle(1));
  //   });

  //   it("place Random Obstacles Test", () => {
  //     expect(controls.placeRandomObstacle(1, 2, 3, 4));
  //   });

  //   it("Calculate Open Position Test", () => {
  //     expect(controls.calculateOpenPosition(1, 2, 3, 4));
  //   });
});
