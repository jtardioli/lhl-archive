// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {
  names.forEach((item, i) => {
    let name = names[i];
    if (name === "Waldo") {
      found(i); // execute callback
    }
  });
};

const actionWhenFound = function (index) {
  console.log("Found him at", index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
