// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
const arg = process.argv.slice(2);
const dollars = Number(arg[0]);

const calculateInvestment = (money, extraCaps = 0, extraBottles = 0) => {
  if (money === 0) {
    return 0;
  }
  const bottles = money / 2;
  const totalBottles = bottles + extraBottles;
  const totalCaps = bottles  + extraCaps;
  extraBottles = totalBottles % 2;
  extraCaps = totalCaps % 4;
  const newBottlesFromBottles = (totalBottles - extraBottles) / 2;
  const newBottlesFromCaps = (totalCaps - extraCaps) / 4;
  const totalNewBottles = newBottlesFromBottles + newBottlesFromCaps;
  return totalNewBottles + calculateInvestment(totalNewBottles * 2, extraCaps, extraBottles);

};

const moneyToBottles = (money) => {
  return (money / 2) + calculateInvestment(money);
};

console.log(`Total Bottles: ${moneyToBottles(dollars)}`);
console.log(`Total Earmed: `);
console.log(`   Bottles: ${calculateInvestment(dollars)} `);
console.log(`   Caps: `);

