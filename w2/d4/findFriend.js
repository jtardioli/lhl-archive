// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = (data, name, field) => {
  const POI = data.filter((person) => {
    return person.name === name;
  })[0];
  if (POI === undefined) {
    return 'Not found';
  }
  
  const friendOfInterest = POI.friends[0];
  const contactOfInterest = data.filter((person) => {
    return person.name === friendOfInterest;
  })[0];
  if (contactOfInterest[field] === undefined) {
    return 'Not found';
  }
  const newObj = {};
  newObj.name = friendOfInterest;
  newObj[field] = contactOfInterest[field];
  return newObj;
};

console.log(findFriend(contacts, "Abbott", "phone"));
console.log(findFriend(contacts, "Buster", "email"));
console.log(findFriend(contacts, "Bob", "phone"));
console.log(findFriend(contacts, "Costello", "birthday"));