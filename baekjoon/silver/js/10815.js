// 숫자 카드

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
  .split('\n');

const set = new Set();

const nums = inputs[1].split(' ').map(Number);
for (const num of nums) {
  set.add(num);
}

let result = '';
const checkNums = inputs[3].split(' ').map(Number);
for (const num of checkNums) {
  result += (set.has(num) ? 1 : 0) + ' ';
}

console.log(result.trim());
