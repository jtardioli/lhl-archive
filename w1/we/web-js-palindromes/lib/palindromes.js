const isPalindrome = function(s) {
  let stringReverse = s.split("").reverse().join("").split(' ').join('');
  s = s.split(' ').join('');
  console.log(stringReverse);
  
  
  return s === stringReverse;
};

isPalindrome('a man a plan a canal panama');


module.exports = isPalindrome;


