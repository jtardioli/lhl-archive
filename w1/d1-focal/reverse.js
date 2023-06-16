let args = process.argv;
args = args.slice(2);

const reverse = (args) => {
  args.forEach((word) => {
    let wordArray = word.split("");
    let reverseString = "";
    for (let i = wordArray.length - 1; i >= 0; i--) {
      reverseString += wordArray[i];
    }
    console.log(reverseString);
  });
};

reverse(args);
