const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },

  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

const biggestFollower = (data) => {
  let mostFollowerNum = 0;
  let mostFollowerName = "";
  for (person in data) {
    if (data[person].follows.length > mostFollowerNum) {
      mostFollowerNum = data[person].follows.length;
      mostFollowerName = data[person].name;
    }
  }
  return mostFollowerName;
};

//console.log(biggestFollower(data));

const mostPopular = (data) => {
  // How many followers does each individual have
  let numFollowersObject = {};
  for (person in data) {
    for (following of data[person].follows) {
      if (!numFollowersObject[following]) {
        numFollowersObject[following] = 0;
      }
      numFollowersObject[following] += 1;
    }
  }
  let mostFollowersNum = 0;
  let mostFollowersName = 0;
  for (person in numFollowersObject) {
    if (numFollowersObject[person] > mostFollowersNum) {
      mostFollowersNum = numFollowersObject[person];
      mostFollowersName = data[person];
    }
  }
  console.log(numFollowersObject);
  return mostFollowersName;
};

//console.log(mostPopular(data));
const getName = (account) => {
  return account.name;
};

const getFollowing = (account, data) => {
  followingNames = [];
  for (person of account.follows) {
    followingNames.push(data[person].name);
  }
  return followingNames;
};

const getFollowers = (accountId, data) => {
  let followerNames = [];
  for (person in data) {
    if (data[person].follows.includes(accountId)) {
      followerNames.push(data[person].name);
    }
  }
  return followerNames;
};

const printAll = (data) => {
  for (person in data) {
    console.log("Name:", getName(data[person]));
    console.log("Followers: ", getFollowers(person, data));
    console.log("Following: ", getFollowing(data[person], data));
    console.log(" ");
  }
};

//console.log(printAll(data));

const unrequitedFollowers = (data) => {
  let unrequitedList = [];
  for (person in data) {
    for (id of data[person].follows) {
      if (!data[id].follows.includes(person)) {
        if (!unrequitedList.includes(data[person].name)) {
          unrequitedList.push(data[person].name);
        }
      }
    }
  }
  return unrequitedList;
};

//console.log(unrequitedFollowers(data));

const getFollowersId = (accountId, data) => {
  let followerNames = [];
  for (account in data) {
    if (data[account].follows.includes(accountId)) {
      followerNames.push(account);
    }
  }
  return followerNames;
};
//console.log(getFollowersId("f01", data));

// most followers over 30
const followersOver30 = (data) => {
  let maxNum = 0;
  let maxName = "";
  let numOfOver30 = 0;
  for (person in data) {
    const followers = getFollowersId(person, data);
    for (follower of followers) {
      if (data[follower].age > 30) {
        numOfOver30 += 1;
      }
    }

    if (numOfOver30 > maxNum) {
      maxNum = numOfOver30;
      maxName = data[person].name;
    }
    numOfOver30 = 0;
  }
  return maxName;
};

//console.log(followersOver30(data));

const mostFollows30 = (data) => {
  let maxNum = 0;
  let maxName = "";
  let numOfOver30 = 0;
  for (person in data) {
    for (followee of data[person].follows) {
      if (data[followee].age > 30) {
        numOfOver30 += 1;
      }
    }

    if (numOfOver30 > maxNum) {
      maxNum = numOfOver30;
      maxName = data[person].name;
    }

    numOfOver30 = 0;
  }
  return maxName;
};
//console.log(mostFollows30(data));

const reach = (data) => {
  let reachObject = {};
  for (person in data) {
    let reach = 0;
    const followers = getFollowersId(person, data);

    reach += followers.length;
    for (follower in followers) {
      reach += getFollowersId(follower, data).length;
    }
    reachObject[person] = reach;
  }
  return reachObject;
};

//console.log(reach(data));
