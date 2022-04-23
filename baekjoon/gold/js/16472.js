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

const map = new Map();

let max = 0;
let left = 0;
for (let right = 0; right < string.length; right++) {
  map.set(string[right], (map.get(string[right]) || 0) + 1);
  if (map.size > n) {
    while (map.size > n) {
      const count = map.get(string[left]);
      map.set(string[left], count - 1);

      if (count === 1) {
        map.delete(string[left]);
      }
      left += 1;
    }
  }
  max = Math.max(max, right - left + 1);
}
console.log(max);
