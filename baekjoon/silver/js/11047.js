// 동전 0

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

const [n, k] = inputs[0].split(' ').map(Number);

let sum = 0;
let count = 0;
for (let i = n; i > 0; i--) {
  const coin = +inputs[i];
  if (coin > k) continue;

  while (sum + coin <= k) {
    sum += coin;
    count += 1;
  }
  if (sum === k) break;
}
console.log(count);
