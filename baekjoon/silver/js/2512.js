// 예산
const inputs = require('fs')
  .readFileSync('../text/2512.txt')
  .toString()
  .split('\n');

let n = parseInt(inputs[0]);
let m = parseInt(inputs[2]);
let budgets = inputs[1].split(' ').map(Number);

let left = 1;
let right = Math.max(...budgets);

function calculate(limit) {
  let sum = 0;
  for (let budget of budgets) {
    if (budget > limit) {
      sum += limit;
      continue;
    }
    sum += budget;
  }
  return sum;
}

let answer;
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  if (calculate(mid) === m) {
    answer = mid;
    break;
  }
  if (calculate(mid) < m) {
    answer = mid;
    left = mid + 1;
    continue;
  }
  right = mid - 1;
}
console.log(answer);
