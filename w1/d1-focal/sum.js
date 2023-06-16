const args = process.argv;
let nums = args.slice(2);

const sum = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
};

console.log(sum(nums[0], nums[1]));
