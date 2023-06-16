const organizeInstructors = function (instructors) {
  const OrganizedInstructors = {};
  for (instructor of instructors) {
    if (!OrganizedInstructors[instructor.course]) {
      OrganizedInstructors[instructor.course] = [];
    }
    OrganizedInstructors[instructor.course].push(instructor.name);
  }
  return OrganizedInstructors;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
