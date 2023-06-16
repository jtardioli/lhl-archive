const nameInverter = function(name) {
  if (name === undefined) {
    return 'throw Error';
  }
  if (name.length === 0) {
    return '';
  }
  
  if (name.trim().split(' ').length === 1) {
    if (name.includes('Dr. ')) {
      return '';
    }
    return name.trim();
  }
  const nameArray = name.trim().split(' ');
  const firstName = nameArray[0].trim();
  const lastName = nameArray[1].trim();
  if (name.trim().split(' ').length === 2) {
    if (
      name.includes('Mr. ') ||
    name.includes('Ms. ')  ||
    name.includes('Mrs. ') ||
    name.includes('Dr. ')
    ) {
      return name;
    }
    return lastName + " " + firstName;
  }

  
  if (name.trim().split(' ').length === 3) {
    if (
      name.includes('Mr. ') ||
    name.includes('Ms. ')  ||
    name.includes('Mrs. ') ||
    name.includes('Dr. ')
    )  {
      const nameArr = name.trim().split(' ');
      const prefix = nameArr[0];
      const firstName = nameArr[1];
      const lastName = nameArr[2];
      const buildName = prefix + " " + lastName + ' ' + firstName;
      return buildName;
     
    }
  }
};




module.exports = nameInverter;