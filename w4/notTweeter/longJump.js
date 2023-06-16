const canJump = function(nums) {
  nums.forEach((item, index) => {
    console.log(item, index);
  });
  return undefined;
};

const Input1 =  [2,3,1,1,4];
const Input2 =  [3,2,1,0,4];

console.log(canJump(Input1));
console.log(canJump(Input2));
