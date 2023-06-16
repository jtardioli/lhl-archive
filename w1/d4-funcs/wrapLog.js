const wrapLog = function (callback, name) {
  return (x, y, z) => {
    if (name === "area") {
      console.log(`area(${x}, ${y}) => ${callback(x, y)}`);
    } else {
      console.log(`area(${x}, ${y}, ${z}) => ${callback(x, y, z)}`);
    }
  };
};

const area = function (x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
