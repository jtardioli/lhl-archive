const arg = process.argv.slice(2);

const obfuscatePassword = (password) => {
  password = password[0].split("");
  password.forEach((letter, index) => {
    if (letter === "a") {
      password.splice(index, 1, "4");
    } else if (letter === "e") {
      password.splice(index, 1, "3");
    } else if (letter === "o") {
      password.splice(index, 1, "0");
    } else if (letter === "l") {
      password.splice(index, 1, "1");
    }
  });
  return password.join("");
};
console.log(obfuscatePassword(arg));
