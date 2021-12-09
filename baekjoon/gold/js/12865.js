// 평범한 배낭

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/12865.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, k] = inputs[0].split(' ').map(Number);
const products = Array(n);
for (let i = 1; i <= n; i++) {
  products[i - 1] = inputs[i].split(' ').map(Number);
}

const valuesPerWeight = Array(k + 1).fill(0);
for (let i = 0; i < n; i++) {
  for (let j = k; j >= products[i][0]; j--) {
    valuesPerWeight[j] = Math.max(
      valuesPerWeight[j],
      products[i][1] + valuesPerWeight[j - products[i][0]]
    );
  }
}
console.log(valuesPerWeight[k]);
