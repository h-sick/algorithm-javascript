// 배열 돌리기 3

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

const [n, m, r] = inputs[0].split(' ').map(Number);
let board = inputs.slice(1, 1 + n).map(input => input.split(' ').map(Number));
const calcs = inputs[1 + n].split(' ').map(Number);

const func = [
  null,
  board => [...board].reverse(),
  board => board.map(row => [...row].reverse()),
  board => {
    const [n, m] = [board.length, board[0].length];
    const newBoard = Array.from({ length: m }, () => Array(n));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        newBoard[i][j] = board[n - 1 - j][i];
      }
    }
    return newBoard;
  },
  board => func[3](func[3](func[3](board))),
  board => {
    const [n, m] = [board.length / 2, board[0].length / 2];
    const [top, bottom] = [board.slice(0, n), board.slice(n)];
    const topLeft = top.map(row => row.slice(0, m)),
      topRight = top.map(row => row.slice(m)),
      bottomLeft = bottom.map(row => row.slice(0, m)),
      bottomRight = bottom.map(row => row.slice(m));

    return [
      ...bottomLeft.map((row, i) => [...row, ...topLeft[i]]),
      ...bottomRight.map((row, i) => [...row, ...topRight[i]]),
    ];
  },
  board => func[5](func[5](func[5](board))),
];

calcs.forEach(calc => (board = func[calc](board)));
board.forEach(row => console.log(row.join(' ')));
