// 달력

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

const n = +inputs.shift();
const schedules = inputs.map(input => input.split(' ').map(Number));

const total = [];
let [first, last] = schedules[0];
const works = Array(366).fill(0);
for (let i = 0; i < n; i++) {
  const [start, end] = schedules[i];
  for (let j = start; j <= end; j++) works[j] += 1;

  if (i === 0) continue;

  if (last + 1 < start) {
    total.push([first, last]);
    first = start;
  }
  if (last < end) {
    last = end;
  }
}
total.push([first, last]);

const sum = total.reduce((acc, cur) => {
  const [start, end] = cur;
  const max = Math.max(...works.slice(start, end + 1));
  return acc + (end - start + 1) * max;
}, 0);
console.log(sum);
// console.log({ schedules, total, works });
