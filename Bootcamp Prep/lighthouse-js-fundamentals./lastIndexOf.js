const lastIndexOf = (array, num) => {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      index = i;
    }
  }
  return index;
};
