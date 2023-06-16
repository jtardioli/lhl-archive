const raisinAlarm = function (cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin Alert!";
  }
  return "All good!";
};

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// STRETCH
const raisinAlarmArray = function (cookies) {
  let returnArray = [];
  for (let val of cookies) {
    returnArray.push(raisinAlarm(val));
  }
  return returnArray;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
