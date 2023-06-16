const checkAir = (samples, threshold) => {
  let numDirtySamples = 0;
  const numTotalSamples = samples.length;
  for (let sample of samples) {
    if (sample === "dirty") {
      numDirtySamples++;
    }
  }
  const percentDirtySample = numDirtySamples / numTotalSamples;

  if (percentDirtySample >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
