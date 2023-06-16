const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins.reycling += 1;
  } else if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
