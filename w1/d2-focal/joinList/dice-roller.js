const args = process.argv.slice(2);

function randomInt() {
  let min = 1;
  let max = 6;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const diceRoller = (args) => {
  let diceRolls = `Rolled ${args[0]} dice: `;
  for (let i = 0; i < Number(args[0]); i++) {
    diceRolls += randomInt();
    if (i < args[0] - 1) {
      diceRolls += ", ";
    }
  }
  return diceRolls;
};

console.log(diceRoller(args));
