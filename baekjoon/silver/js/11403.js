// 경로 찾기
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
  .split('\n');

const n = +inputs.shift();
const board = [];
inputs.forEach((input, i) => (board[i] = input.split(' ').map(Number)));

for (let mid = 0; mid < n; mid++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][mid] && board[mid][j]) board[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(board[i].join(' '));
}
