let age = 0;

const whichSchool = (age) => {
  if (age < 13) {
    return "Elementary School";
  } else if (age > 18) {
    return "Lighthouse Labs";
  } else {
    return "Secondary School";
  }
};
