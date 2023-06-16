const talkingCalendar = function (date) {
  date = date.split("/");
  const dateNumToString = (num) => {
    const regex1 = /^[^1]+1/;
    const regex2 = /^[^1]+2/;
    const regex3 = /^[^1]+3/;
    if (regex1.test(num)) {
      num = Number(num);
      return `${num}st`;
    } else if (regex2.test(num)) {
      num = Number(num);
      return `${num}nd`;
    } else if (regex3.test(num)) {
      num = Number(num);
      return `${num}rd`;
    } else {
      num = Number(num);
      return `${num}th`;
    }
  };

  const dateMonthToString = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[Number(month - 1)];
  };

  const day = dateNumToString(date[2]);
  const month = dateMonthToString(date[1]);
  const year = date[0];
  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
