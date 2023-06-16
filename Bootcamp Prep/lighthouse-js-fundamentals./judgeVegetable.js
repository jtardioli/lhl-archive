const judgeVegetable = (vegetables, metric) => {
  let winner = null;
  let metricWinner = 0;
  for (let vegtable of vegetables) {
    if (vegtable[metric] > metricWinner) {
      winner = vegtable["submitter"];
      metricWinner = vegtable[metric];
    }
  }
  return winner;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
