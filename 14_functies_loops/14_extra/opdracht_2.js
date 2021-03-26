console.log("We are going to paint walls");

// const paintWall = function () {
//     console.log("The wall has been painted red");
// };

// paintWall();

const paintWall = function (color) {
    console.log("The wall has been painted " + color);
};

paintWall('blue');

// paintWall();
// The wall has been painted undefined

const paintWall2 = function (facing, color) {
  console.log("The " + facing + " wall has been painted " + color);
};

paintWall2("north", "blue");

