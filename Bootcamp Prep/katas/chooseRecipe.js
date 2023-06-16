const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let finalRecipe = "";
  for (let ingredient of bakeryA) {
    for (let recipe of recipes) {
      if (recipe.ingredients.includes(ingredient)) {
        let searchLocation = null;
        if (recipe.ingredients[0] === ingredient) {
          searchLocation = 1;
        } else {
          searchLocation = 0;
        }
        for (let ingredientB of bakeryB) {
          if (recipe.ingredients[searchLocation] === ingredientB) {
            finalRecipe = recipe.name;
          }
        }
      }
    }
  }
  return finalRecipe;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
