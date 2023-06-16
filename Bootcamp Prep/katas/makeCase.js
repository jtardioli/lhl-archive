const makeCase = function (input, rule) {
  // Camel Case
  const camelCase = function (input) {
    let camelCase = "";
    input = input.split(" ");
    input.forEach((word, index) => {
      if (index !== 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      camelCase += word;
    });
    return camelCase.trim();
  };
  // Pascal case
  const pascalCase = function (input) {
    let camelCase = "";
    input = input.split(" ");
    input.forEach((word, index) => {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      camelCase += word;
    });
    return camelCase.trim();
  };
  // Snake Case
  const snakeCase = function (input) {
    input = input.split(" ");
    let newString = "";
    input.forEach((word, index) => {
      newString += word;
      if (index < input.length - 1) {
        newString += "_";
      }
    });
    return newString;
  };

  // Kebab Case
  const kebabCase = function (input) {
    input = input.split(" ");
    let newString = "";
    input.forEach((word, index) => {
      newString += word;
      if (index < input.length - 1) {
        newString += "-";
      }
    });
    return newString;
  };
  // Title
  const titleCase = function (input) {
    let camelCase = "";
    input = input.split(" ");
    input.forEach((word, index) => {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      camelCase += word;
      if (index < input.length) {
        camelCase += " ";
      }
    });
    return camelCase.trim();
  };
  //vowel case
  const vowelCase = function (input) {
    let vowels = ["a", "e", "i", "o", "u"];
    let newString = "";
    input = input.split("");
    input.forEach((letter, index) => {
      if (vowels.includes(letter)) {
        input[index] = letter.toUpperCase();
      }
    });
    for (letter of input) {
      newString += letter;
    }
    return newString;
  };
  //consonant case
  const consonantCase = function (input) {
    let vowels = ["a", "e", "i", "o", "u"];
    let newString = "";
    input = input.split("");
    input.forEach((letter, index) => {
      if (!vowels.includes(letter)) {
        input[index] = letter.toUpperCase();
      }
    });
    for (letter of input) {
      newString += letter;
    }
    return newString;
  };
  if (!Array.isArray(rule)) {
    rule = [rule];
  }
  if (rule.includes("camel")) {
    input = camelCase(input);
  }
  if (rule.includes("pascal")) {
    input = pascalCase(input);
  }
  if (rule.includes("snake")) {
    input = snakeCase(input);
  }
  if (rule.includes("kebab")) {
    input = kebabCase(input);
  }
  if (rule.includes("title")) {
    input = titleCase(input);
  }
  if (rule.includes("vowel")) {
    input = vowelCase(input);
  }
  if (rule.includes("consonant")) {
    input = consonantCase(input);
  }
  if (rule.includes("upper")) {
    input = input.toUpperCase();
  }
  if (rule.includes("lower")) {
    input = input.toLowerCase();
  }
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
