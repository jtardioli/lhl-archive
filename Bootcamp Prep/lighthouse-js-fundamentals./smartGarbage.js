const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins["recycling"] += 1;
    console.log(bins.recycling);
  } else if (trash === "waste") {
    bins["waste"] += 1;
  } else if (trash === "compost") {
    bins["compost"] += 1;
  }
  return bins;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
