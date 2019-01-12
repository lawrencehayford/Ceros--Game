const Controls = require("../js/controls");

beforeEach(() => {
  controls = new Controls();
  controls.skierDirection = 2;
});

describe("Controls Test", () => {
  test("Get Skier Asset", () => {
    /*
    if  the skier Asset Lenght is greater than 1 , then an Asset name was returned
    */
    expect(controls.getSkierAsset().length).toBeGreaterThanOrEqual(1);
  });

  test("Move Skier Test", () => {
    /*
    if  the skier is moved, the x and Y cordinates wont be the same
    and this will prove that the function works
    */
    let prevSkierMapX = controls.skierMapX;
    let prevSkierMapY = controls.skierMapY;
    controls.moveSkier();
    expect(controls.skierMapX).not.toEqual(prevSkierMapX);
    expect(controls.skierMapY).not.toEqual(3);
  });

  test("Place Random Obstacles Test", () => {
    /*
    if obstacles object is not null, then it means
    controls.placeRandomObstacle push an item into the obstacle object
    */
    controls.placeRandomObstacle(1, 3, 7, 10);
    expect(controls.obstacles).not.toBeNull();
  });

  test("Calculate Open Position Test", () => {
    expect(controls.calculateOpenPosition(1, 3, 7, 10)).not.toBeNull();
  });
});
