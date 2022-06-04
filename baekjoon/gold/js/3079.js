// 입국심사

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

const [n, m] = inputs[0].split(' ').map(Number);
const times = Array(n).fill(0);

for (let i = 1; i <= n; i++) times[i - 1] = +inputs[i];
times.sort((a, b) => a - b);

let left = BigInt(times[0]);
let right = BigInt(10 ** 9 * 10 ** 9);
while (left <= right) {
  const mid = (left + right) / BigInt(2);

  let pass = BigInt(0);
  for (const time of times) {
    pass += mid / BigInt(time);
    if (pass >= m) {
      break;
    }
  }

  if (pass >= m) right = mid - BigInt(1);
  else left = mid + BigInt(1);
}
console.log(Number(left));
