const inputs = require('fs')
  .readFileSync('../text/2655.txt')
  .toString()
  .split('\n');
let n = inputs.shift();
let bricks = inputs.map((brick) => brick.split(' ').map(Number));
// 넓이, 높이, 무게
// 어떻게 정렬해야 되지?
// bricks.sort((a, b) => a[0] - b[0]);
bricks.forEach((brick) => console.log(brick));

let dp = Array(n).fill(0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (
      bricks[j][0] > bricks[i][0] &&
      bricks[j][2] > bricks[i][2] &&
      dp[j] > max
    )
      max = dp[j];
    dp[i] = max + 1;
  }
}
console.log(dp);

// let answer= [], peak = 0;
// for(let i=brickCount -1; i >= 0; i--){
//   peak = Math.max(peak, bricks[i]);

// }

// let topHeight = Math.max(...dp);
// console.log(topHeight);
// for (let i = brickCount - 1; i >= 0; i--) {
//   if (topHeight && dp[i] === topHeight) {
//     for(let j= i-1; j >= 0; j--) {
//       while(dp[j][2] < dp)
//     }
//     // console.log(i + 1);
//     // topHeight--;
//   }
// }
