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

let [n, m] = inputs[0].split(' ').map(Number);
const cakes = inputs[1].split(' ').map(Number);

const noRestCakes = cakes.filter(cake => !(cake % 10));
noRestCakes.sort((a, b) => a - b);

let count = 0;
for (let cake of noRestCakes) {
  while (m && cake > 10) {
    cake -= 10;
    count += 1;
    m -= 1;
  }
  if (cake === 10) count += 1;
}

const hasRestCakes = cakes.filter(cake => cake % 10);
hasRestCakes.sort((a, b) => a - b);

let temp = 0;
for (const cake of hasRestCakes) {
  if (temp > 10 && m === 0) break;

  temp += cake;
  while (m && temp > 10) {
    temp -= 10;
    count += 1;
    m -= 1;
  }
  if (temp === 10) {
    temp = 0;
    count += 1;
  }
}
console.log(count);
