const blocksAway = function (directions) {
  currentAngle = 90;
  let x = 0;
  let y = 0;
  const findAngle = (direction, distance) => {
    if (direction === "left") {
      currentAngle -= 90;
    }
    if (direction === "right") {
      currentAngle += 90;
    }
    if (currentAngle >= 360) {
      currentAngle = 0;
    }

    if (currentAngle === 90) {
      y += distance;
    } else if (currentAngle === 180) {
      x += distance;
    } else if (currentAngle === 270) {
      y -= distance;
    } else if (currentAngle === 0) {
      x -= distance;
    }
  };
  for (let i = 0; i < directions.length; i += 2) {
    findAngle(directions[i], directions[i + 1]);
  }

  let blocksAway = {};
  if (y > 0) {
    blocksAway["North"] = y;
  } else if (y < 0) {
    blocksAway["South"] = y;
  }

  if (x > 0) {
    blocksAway["East"] = x;
  } else if (x < 0) {
    blocksAway["West"] = x;
  }

  return blocksAway;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
