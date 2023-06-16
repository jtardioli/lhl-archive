// const rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// };

//console.log(rollDie()); // 1 (for example)

// ==================================
function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = -1;

  return function () {
    index += 1;
    return list[index];
  };
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6

const countdownGenerator = function (x) {
  let count = x;

  return () => {
    if (count > 0) {
      console.log(`T-minus ${count}...`);
    } else {
      console.log("Rockets already gone, bub!");
    }
    count -= 1;
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
