const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  }
};

const array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);