// 가장 큰 정사각형

const inputs = require('fs')
  .readFileSync('../text/1915.txt')
  .toString()
  .split('\n');

const [n, m] = inputs[0].split(' ').map(Number);

let board = Array.from({ length: n }, () => Array(m).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < m; j++) {
    if (inputs[i][j] == 1) {
      board[i - 1][j] = 1;
      if (n === 1) {
        console.log(1);
        return;
      }
    }
  }
}

let max = 0,
  minimum = 0;
for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) {
    if (board[i][j]) {
      board[i][j] =
        Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
      max = Math.max(max, board[i][j]);
    } else {
      if (minimum === 0 && (i === 1 || j === 1) && board[i - 1][j - 1] === 1) {
        minimum = 1;
        continue;
      }
    }
  }
}

if (max === 0 && minimum === 1) max = 1;
console.log(max * max);
