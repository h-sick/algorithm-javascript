// 설탕 배달

let sugar = +require('fs')
  .readFileSync('../text/2839.txt')
  .toString()
  .split('\n')[0];

// let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
// dp[0] = 0;
// dp[1] = 1;
// dp[2] = 1;
// let canMake = Array(n + 1).fill(0);

// for (let bag of [3, 5]) {
//   for (let i = bag; i <= n; i++) {
//     // 가방 합쳐서 어떻게 만들꺼야
//     dp[i] = Math.min(dp[i], dp[i - bag] + 1);
//   }
// }
// console.log(dp);

let bags = 0;
while (true) {
  if (sugar % 5 === 0) {
    console.log(sugar / 5 + bags);
    break;
  }
  if (sugar < 0) {
    console.log(-1);
    break;
  }
  sugar -= 3;
  bags++;
}
