// 용액

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
const liquids = inputs[1].split(' ').map(Number);

let [left, right] = [0, n - 1];

let min = Number.MAX_SAFE_INTEGER;
let answer = [];
while (left < right) {
  const sum = liquids[left] + liquids[right];
  if (Math.abs(sum) <= min) {
    min = Math.abs(sum);
    answer = [liquids[left], liquids[right]];
  }

  if (sum === 0) break;
  if (sum > 0) right -= 1;
  if (sum < 0) left += 1;
}
console.log(answer.join(' '));
