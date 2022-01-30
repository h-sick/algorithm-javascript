// 전화번호 목록

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/5052.txt')
  .toString()
  .split('\n');

let t = +inputs[0];
let index = 1;

const isRightNumbers = sortedNumbers => {
  let beforeNumber = null;
  for (const number of sortedNumbers) {
    if (!beforeNumber) {
      beforeNumber = number;
      continue;
    }
    if (number.indexOf(beforeNumber) === 0) return 'NO';
    beforeNumber = number;
  }
  return 'YES';
};

while (t) {
  const sortedNumbers = Array.from({ length: +inputs[index++] }, () =>
    inputs[index++].trim()
  ).sort();

  console.log(isRightNumbers(sortedNumbers));
  t--;
}
