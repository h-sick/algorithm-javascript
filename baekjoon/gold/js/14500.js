// 테트로미노

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

const [n, m] = inputs[0].split(' ').map(Number);
const board = Array.from({ length: n }, () => Array(m).fill(0));
for (let i = 1; i <= n; i++) {
  const row = inputs[i].split(' ').map(Number);
  row.forEach((num, j) => (board[i - 1][j] = num));
}

const tetrominos = [
  // 일자
  { dx: [0, 0, 0], dy: [1, 2, 3] },
  { dx: [1, 2, 3], dy: [0, 0, 0] },
  // 정사각형
  { dx: [0, 1, 1], dy: [1, 0, 1] },
  // ㄱ자
  { dx: [1, 2, 2], dy: [0, 0, 1] },
  { dx: [0, 0, -1], dy: [1, 2, 2] },
  { dx: [0, 1, 2], dy: [1, 1, 1] },
  { dx: [1, 0, 0], dy: [0, 1, 2] },
  { dx: [0, 1, 2], dy: [1, 0, 0] },
  { dx: [0, -1, -2], dy: [1, 1, 1] },
  { dx: [0, 0, 1], dy: [1, 2, 2] },
  { dx: [1, 1, 1], dy: [0, 1, 2] },
  // 지그재그
  { dx: [1, 1, 2], dy: [0, 1, 1] },
  { dx: [-1, -1, -2], dy: [0, 1, 1] },
  { dx: [0, -1, -1], dy: [1, 1, 2] },
  { dx: [0, 1, 1], dy: [1, 1, 2] },
  // 볼록
  { dx: [0, 0, 1], dy: [1, 2, 1] },
  { dx: [0, 0, -1], dy: [1, 2, 1] },
  { dx: [1, 2, 1], dy: [0, 0, 1] },
  { dx: [1, 2, 1], dy: [0, 0, -1] },
];

let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (const { dx, dy } of tetrominos) {
      let sum = board[i][j];
      let isOut = false;

      for (let k = 0; k < 3; k++) {
        const [nx, ny] = [i + dx[k], j + dy[k]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          isOut = true;
          break;
        }
        sum += board[nx][ny];
      }

      if (!isOut) {
        max = Math.max(max, sum);
      }
    }
  }
}
console.log(max);
