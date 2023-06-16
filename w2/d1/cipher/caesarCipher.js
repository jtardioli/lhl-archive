// caesar.js

const encrypt = function(plaintext, key) {
  const alphapbet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let newString = '';
  for (let item of plaintext) {
    if (alphapbet.includes(item)) {

      let index = alphapbet.findIndex((letter) => {
        return letter === item;
      });

      let newIndex = index + key;
      
      if (newIndex < 0) {
        newIndex = 26 + key + index;
      }
   
      if (newIndex > 25) {
        const distance = 25 - index;
        newIndex = -1 + key - distance;
      }
      newString += alphapbet[newIndex];
    } else {
      newString += item;
    }

    
  }

  return newString;

};

console.log(encrypt('cccccc', -5));

module.exports = { encrypt };