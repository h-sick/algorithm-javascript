// 점프

let inputs = require('fs')
  .readFileSync('../text/1890.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
inputs.shift();
let board = inputs.map((input) => input.split(' ').map(Number));

let visited = Array.from({ length: n }, () => Array(n).fill(BigInt(0)));
visited[0][0] = BigInt(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] && board[i][j] !== 0) {
      const length = board[i][j];
      if (i + length < n) visited[i + length][j] += visited[i][j];
      if (j + length < n) visited[i][j + length] += visited[i][j];
    }
  }
}
console.log(visited[n - 1][n - 1].toString());
