// 주유소

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/13305.txt'
  )
  .toString()
  .split('\n');

let cities = +inputs[0];
let distances = inputs[1].split(' ').map(BigInt);
let costs = inputs[2].split(' ').map(BigInt);

let min = BigInt(10e9),
  total = BigInt(0);
for (let i = 0; i < cities - 1; i++) {
  if (costs[i] < min) min = costs[i];
  total += min * distances[i];
}
console.log(total.toString());
