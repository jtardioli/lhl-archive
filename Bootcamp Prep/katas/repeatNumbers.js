const repeatNumbers = function (data) {
  let string = "";
  data.forEach((array, index) => {
    for (let i = 1; i <= array[1]; i++) {
      string += array[0];
    }
    if (index < array.length) {
      string += ", ";
    }
  });

  return string.replace("$", "");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
