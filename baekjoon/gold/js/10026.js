const inputs = require('fs')
  .readFileSync('../text/10026.txt')
  .toString()
  .split('\n');
const n = parseInt(inputs[0]);

let board = Array.from(Array(n), () => Array(n));
let visited = Array.from(Array(n), () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    board[i][j] = inputs[i + 1][j];
  }
}
const boardSize = board.length;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs(x, y, board, visited) {
  let queue = [];
  queue.push([x, y]);
  visited[x][y] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    const color = board[x][y];
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
        if (visited[nx][ny] === 0 && board[nx][ny] === color) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

let count = 0,
  amblyopiaCount = 0;

let amblyopiaBoard = board.map((row) =>
  row.map((color) => (color === 'R' ? 'G' : color))
);
let amblyopiaVisited = Array.from(Array(n), () => Array(n).fill(0));

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    if (visited[i][j] === 0) {
      count++;
      bfs(i, j, board, visited);
    }
    if (amblyopiaVisited[i][j] === 0) {
      amblyopiaCount++;
      bfs(i, j, amblyopiaBoard, amblyopiaVisited);
    }
  }
}
console.log(count, amblyopiaCount);
