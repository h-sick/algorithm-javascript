// 가장 높은 탑

const inputs = require('fs')
  .readFileSync('../text/2655.txt')
  .toString()
  .split('\n');
let n = inputs.shift();
let bricks = inputs.map((brick, i) => [...brick.split(' ').map(Number), i]);
bricks.sort((a, b) => b[0] - a[0]);

let dp = Array(n).fill(0);
dp[0] = bricks[0][1];

for (let i = 1; i < n; i++) {
  let maxHeight = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (bricks[j][2] > bricks[i][2] && dp[j] > maxHeight) {
      maxHeight = dp[j];
    }
  }
  dp[i] = maxHeight + bricks[i][1];
}

let answer = [];
let max = Math.max(...dp);
for (let i = dp.length - 1; i >= 0; i--) {
  if (max === dp[i]) {
    answer.push(bricks[i][3] + 1);
    max -= bricks[i][1];
  }
}
console.log(answer.length);
answer.forEach((brick) => console.log(brick));

// let bricks = inputs.map((brick, i) => [...brick.split(' ').map(Number), i]);

// bricks.sort((a, b) => b[0] - a[0]);

// // 몇번째 벽돌로 쌓을 수 있는지, 지금까지 탑 높이 합산, 벽돌의 인덱스
// let dp = Array.from({ length: n }, () => [0, 0, null]);
// dp[0] = [1, bricks[0][1], null];

// for (let i = 1; i < n; i++) {
//   let max = [0, 0, null];
//   for (let j = i - 1; j >= 0; j--) {
//     if (bricks[j][2] > bricks[i][2]) {
//       if (dp[j][0] > max[0] || (dp[j][0] === max[0] && dp[j][1] > max[1])) {
//         max = [dp[j][0], dp[j][1], bricks[i][3] + 1];
//         if (j === 0) dp[0][2] = 1;
//       }
//     }
//     dp[i][0] = max[0] + 1;
//   }
//   dp[i][1] += max[1] + bricks[i][1];
//   dp[i][2] = max[2] || null;
// }

// dp.sort((a, b) => b[2] - a[2]).forEach((brick, i) => {
//   if (i === 0) console.log(brick[0]);
//   brick[2] && console.log(brick[2]);
// });

// // 넓이, 높이, 무게
// // bricks.sort((a, b) => b[0] - a[0]);
// // bricks.forEach((brick) => console.log(brick));

// // 몇 번째로 쌓을 수 있는지, 이전 벽돌 인덱스, 벽돌 번호
// let dp = Array.from({ length: n }, (_, i) => [0, null, i]);
// dp[0] = [1, null, 0];

// for (let i = 1; i < n; i++) {
//   let max = 0,
//     height = 0;
//   for (let j = i - 1; j >= 0; j--) {
//     if (bricks[j][0] > bricks[i][0] && bricks[j][2] > bricks[i][2]) {
//       if (dp[j][0] > max) {
//         max = dp[j][0];
//         height = dp[j][1];
//         dp[i][1] = j;
//       }
//       if (dp[j][0] === max && bricks[j][1] > height) dp[i][1] = j;
//     }
//     dp[i][0] = max + 1;
//   }
// }
// const topBrick = [...dp].sort((a, b) => b[0] - a[0])[0];
// console.log(topBrick[0]);

// let queue = [];
// queue.push(topBrick);
// while (queue.length > 0) {
//   const brick = queue.shift();
//   console.log(brick[2] + 1);
//   if (brick[1] !== null) queue.push(dp[brick[1]]);
// }
