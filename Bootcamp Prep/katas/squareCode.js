const squareCode = function (message) {
  message = message.replaceAll(" ", "");
  messageCopy = message;
  charsPerLine = Math.ceil(Math.sqrt(message.length));
  let square = [];

  while (message.length > 0) {
    let string = "";

    for (let i = 0; i < charsPerLine; i++) {
      string += message.charAt(0);
      message = message.slice(1);
    }
    square.push(string);
  }

  let codedMessage = "";

  while (codedMessage.length < messageCopy.length + square.length - 1) {
    square.forEach((line, index) => {
      codedMessage += line.charAt(0);
      square[index] = line.slice(1);
    });
    codedMessage += " ";
  }

  return codedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
