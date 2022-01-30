// 가장 긴 바이토닉 부분 수열

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/11054.txt'
  )
  .toString()
  .split('\n');

const n = +inputs[0];
const a = inputs[1].split(' ').map(Number);

const increases = Array(n).fill(0);
const decreases = Array(n).fill(0);
increases[0] = 1;
decreases[n - 1] = 1;

for (let i = 1; i < n; i++) {
  let increaseMax = 1;
  for (let j = 0; j < i; j++) {
    if (a[j] < a[i]) increaseMax = Math.max(increaseMax, increases[j] + 1);
  }
  increases[i] = increaseMax;

  let decreaseMax = 1;
  for (let j = n - 1; j > n - 1 - i; j--) {
    if (a[j] < a[n - 1 - i])
      decreaseMax = Math.max(decreaseMax, decreases[j] + 1);
  }
  decreases[n - 1 - i] = decreaseMax;
}
const bitonicLengths = increases.map((num, i) => num + decreases[i]);
console.log(Math.max(...bitonicLengths) - 1);

// const a = `0 ${inputs[1]} 0`.split(' ').map(Number);

// const increases = Array(n + 2).fill(0);
// const decreases = Array(n + 2).fill(0);
// increases[1] = 1;
// decreases[n] = 1;

// for (let i = 2; i <= n; i++) {
//   let increaseMax = 1;
//   for (let j = 1; j < i; j++) {
//     if (a[j] < a[i]) increaseMax = Math.max(increaseMax, increases[j] + 1);
//   }
//   increases[i] = increaseMax;

//   let decreaseMax = 1;
//   for (let j = n; j > n + 1 - i; j--) {
//     if (a[j] < a[n + 1 - i])
//       decreaseMax = Math.max(decreaseMax, decreases[j] + 1);
//   }
//   decreases[n + 1 - i] = decreaseMax;
// }
