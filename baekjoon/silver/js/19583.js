// 싸이버개강총회

const path = require('path');
const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? 'dev/stdin'
      : path.join(
          __dirname,
          `../text/${path.basename(__filename).split('.')[0]}.txt`
        )
  )
  .toString()
  .trim()
  .split('\n');

const [s, e, q] = inputs.shift().split(' ');

const isEarlierOrSame = (studentTime, compareTime, isEarlierOrSame = true) => {
  if (!isEarlierOrSame) {
    [studentTime, compareTime] = [compareTime, studentTime];
  }

  const [studentHour, studentMinute] = studentTime.split(':').map(Number);
  const [compareHour, compareMinute] = compareTime.split(':').map(Number);

  if (studentHour < compareHour) return true;
  if (studentHour > compareHour) return false;
  if (studentHour === compareHour) {
    if (studentMinute <= compareMinute) return true;
    else return false;
  }
};

const students = new Set();
let isStarted = false;
let count = 0;

inputs.forEach(input => {
  const [time, student] = input.split(' ');

  if (!isStarted) {
    if (isEarlierOrSame(time, s)) {
      students.add(student.trim());
      return;
    } else isStarted = true;
  }

  if (
    students.has(student.trim()) &&
    isEarlierOrSame(time, e, false) &&
    isEarlierOrSame(time, q)
  ) {
    count += 1;
    students.delete(student.trim());
  }
});
console.log(count);
