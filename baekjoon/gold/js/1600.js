// 말이 되고픈 원숭이

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1600.txt')
  .toString()
  .split('\n');

let k = +inputs[0];
const [w, h] = inputs[1].split(' ').map(Number);
let board = Array.from({ length: h }, () => Array(w).fill(0));
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (inputs[i + 2][j * 2] == 1) board[i][j] = 1;
  }
}
function bfs() {
  const hx = [1, 2, 2, 1, -1, -2, -2, -1];
  const hy = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let visited = Array.from({ length: h }, () =>
    Array(w)
      .fill(0)
      .map((_) => Array(k + 1).fill(0))
  );

  let queue = [];
  queue.push([0, 0, 0]);

  let move = 0;
  while (queue.length) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const [x, y, horse] = queue.shift();
      if (x === h - 1 && y === w - 1) return move;
      visited[x][y][horse] = 1;
      if (horse < k) {
        for (let j = 0; j < 8; j++) {
          const [nx, ny] = [x + hx[j], y + hy[j]];
          if (
            nx >= 0 &&
            nx < h &&
            ny >= 0 &&
            ny < w &&
            board[nx][ny] === 0 &&
            visited[nx][ny][horse + 1] === 0
          )
            queue.push([nx, ny, horse + 1]);
        }
      }
      for (let m = 0; m < 4; m++) {
        const [nx, ny] = [x + dx[m], y + dy[m]];
        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          board[nx][ny] === 0 &&
          visited[nx][ny][horse] === 0
        )
          queue.push([nx, ny, horse]);
      }
    }
    move++;
  }
  return -1;
}
console.log(bfs());
