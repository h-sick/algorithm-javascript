// 창영이와 커피

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/22115.txt'
  )
  .toString()
  .split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
if (k === 0) {
  console.log(0);
  return;
}

let caffeins = inputs[1].split(' ').map(Number);
let dp = Array(k + 1).fill(k + 1);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = k; j >= caffeins[i]; j--) {
    dp[j] = Math.min(dp[j], dp[j - caffeins[i]] + 1);
  }
}
if (dp[k] === k + 1) dp[k] = -1;
console.log(dp[k]);

// 그리디 풀이법이라 이 문제에 적합하지 않음
// caffeins.sort((a, b) => b - a);

// let sum = 0,
//   count = 0,
//   found = false;
// for (let caffein of caffeins) {
//   sum += caffein;
//   count++;
//   if (sum === k) {
//     found = true;
//     break;
//   }
//   if (sum > k) {
//     sum -= caffein;
//     count--;
//   }
// }
// if (!found) count = -1;
// console.log(count);
