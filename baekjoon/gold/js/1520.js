// 내리막 길
const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1520.txt')
  .toString()
  .split('\n');

const [m, n] = inputs[0].split(' ').map(Number);
let board = Array.from({ length: m }, () => Array(n));
for (let i = 0; i < m; i++) {
  const row = inputs[i + 1].split(' ').map(Number);
  board[i] = row;
}

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let routes = Array.from({ length: m }, () => Array(n).fill(-1));

function dfs(x, y) {
  if (x === 0 && y === 0) return 1;
  if (routes[x][y] === -1) {
    routes[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[x][y] < board[nx][ny])
        routes[x][y] += dfs(nx, ny);
    }
  }
  return routes[x][y];
}
console.log(dfs(m - 1, n - 1));
