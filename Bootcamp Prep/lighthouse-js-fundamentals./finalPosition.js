const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = (moves) => {
  let y = 0;
  let x = 0;
  for (let move of moves) {
    if (move === "north") {
      y++;
    }
    if (move === "south") {
      y--;
    }
    if (move === "west") {
      x--;
    }
    if (move === "east") {
      x++;
    }
  }
  return [x, y];
};

console.log(finalPosition(moves));
