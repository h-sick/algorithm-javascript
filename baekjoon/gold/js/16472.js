// 고냥이

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
const string = inputs[1].trim();

if (string.length < n) {
  return console.log(0);
}

const charSet = new Set();

let max = 0;
let left = 0;
for (let right = 0; right < string.length; right++) {
  charSet.add(string[right]);
  if (charSet.size > n) {
    charSet.delete(string[left]);

    if (n === 1) {
      left = right;
      continue;
    }

    left = right - 1;
    while (string[right - 1] === string[left]) {
      left -= 1;
    }
    left += 1;
  }
  max = Math.max(max, right - left + 1);
}
console.log(max);
