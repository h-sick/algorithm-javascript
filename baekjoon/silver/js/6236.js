// 용돈 관리

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/6236.txt')
  .toString()
  .split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
const prices = Array.from({ length: n }, (_, i) => +inputs[i + 1]);

const calcMinDay = standardPrice => {
  let day = 1;
  let sum = 0;
  for (const price of prices) {
    if (sum + price > standardPrice) {
      day += 1;
      sum = price;
    } else sum += price;
  }
  return day;
};

let minPrice = null;
let [left, right] = [Math.max(...prices), 10e9];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const minDay = calcMinDay(mid);
  if (minDay > m) {
    left = mid + 1;
  } else {
    if (minDay === m) {
      minPrice = mid;
    }
    right = mid - 1;
  }
}
console.log(minPrice);
