const instructorWithLongestName = (instructors) => {
  let longestName = 0;
  let longestObject = null;
  for (let instructor of instructors) {
    if (instructor.name.length > longestName) {
      longestName = instructor.name.length;
      longestObject = instructor;
    }
  }
  return longestObject;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
