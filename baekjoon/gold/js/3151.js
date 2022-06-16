// 합이 0

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

const n = +inputs[0];
const scores = inputs[1].split(' ').map(Number);

scores.sort((a, b) => a - b);

const lowerBound = (start, sum) => {
  let left = start;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (scores[mid] >= sum) right = mid - 1;
    else left = mid + 1;
  }
  return sum === scores[left] ? left : null;
};

const upperBound = (start, sum) => {
  let left = start;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (scores[mid] > sum) right = mid - 1;
    else left = mid + 1;
  }
  return sum === scores[right] ? right : null;
};

let count = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    const sum = (scores[i] + scores[j]) * -1;
    const leftIndex = lowerBound(j + 1, sum);
    const rightIndex = upperBound(j + 1, sum);

    if (leftIndex && rightIndex) {
      count += rightIndex - leftIndex + 1;
    }
  }
}
console.log(count);
