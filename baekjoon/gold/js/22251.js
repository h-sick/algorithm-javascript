// 빌런 호석

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

const [n, k, p, x] = inputs[0].split(' ').map(Number);

const nums = [
  '1111110',
  '0110000',
  '1101101',
  '1111001',
  '0110011',
  '1011011',
  '1011111',
  '1110000',
  '1111111',
  '1111011',
];

const bitCount = (n1, n2) => {
  const n = parseInt(n1, 2) ^ parseInt(n2, 2);
  return n.toString(2).match(/1/g)?.length || 0;
};

const costs = Array.from({ length: 10 }, () => Array(10).fill(0));

for (let i = 0; i <= 9; i++) {
  for (let j = i + 1; j <= 9; j++) {
    costs[i][j] = costs[j][i] = bitCount(nums[i], nums[j]);
  }
}

let count = 0;
for (let y = 1; y <= n; y++) {
  let cost = 0;
  let [nx, ny] = [x, y];
  for (let i = 0; i < k; i++) {
    cost += costs[nx % 10][ny % 10];
    [nx, ny] = [Math.floor(nx / 10), Math.floor(ny / 10)];
  }
  if (1 <= cost && cost <= p) count++;
}
console.log(count);
