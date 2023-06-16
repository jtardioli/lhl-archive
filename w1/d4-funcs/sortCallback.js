const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 },
];

const sortedStudents = students.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }

  if (a.name === b.name) {
    if (Number(a.age) > Number(b.age)) {
      return -1;
    }
    if (Number(a.age) < Number(b.age)) {
      return 1;
    }
    return 0;
  }
});

console.log(sortedStudents);
