// 배열 돌리기 4

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

const [n, m, k] = inputs[0].split(' ').map(Number);
let board = null;

const rotations = inputs
  .slice(n + 1, n + k + 1)
  .map(input => input.split(' ').map(Number));

const rotateBoard = (r, c, s) => {
  const n = s * 2 + 1;
  const [startRow, startCol] = [r - s - 1, c - s - 1];

  const newBoard = Array.from({ length: n }, () => Array(n).fill(0));
  newBoard[s][s] = board[startRow + s][startCol + s];

  for (let i = 0; i < s; i++) {
    let row = i;
    let col = i;

    for (let j = 0; j < 4; j++) {
      while (row === i && col >= i && col < n - 1 - i) {
        newBoard[row][col + 1] = board[startRow + row][startCol + col];
        col++;
      }

      while (row >= i && row < n - 1 - i && col === n - 1 - i) {
        newBoard[row + 1][col] = board[startRow + row][startCol + col];
        row++;
      }

      while (row === n - 1 - i && col > i && col <= n - 1 - i) {
        newBoard[row][col - 1] = board[startRow + row][startCol + col];
        col--;
      }

      while (row > i && row <= n - 1 - i && col === i) {
        newBoard[row - 1][col] = board[startRow + row][startCol + col];
        row--;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board[startRow + i][startCol + j] = newBoard[i][j];
    }
  }
};

let answer = Number.MAX_SAFE_INTEGER;

const checked = Array(k).fill(false);
const getPermutation = orders => {
  if (orders.length === k) {
    board = inputs.slice(1, n + 1).map(input => input.split(' ').map(Number));

    orders.forEach(order => {
      rotateBoard(...rotations[order]);
    });

    board.forEach(row => {
      const rowSum = row.reduce((acc, cur) => acc + cur, 0);
      answer = Math.min(rowSum, answer);
    });
    return;
  }

  for (let i = 0; i < k; i++) {
    if (checked[i]) continue;
    checked[i] = true;
    getPermutation([...orders, i]);
    checked[i] = false;
  }
};
getPermutation([]);
console.log(answer);
