// 로봇

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

const [m, n] = inputs[0].split(' ').map(Number);
const board = inputs.slice(1, m + 1).map(input => input.split(' ').map(Number));
const [start, end] = inputs
  .slice(m + 1, m + 3)
  .map(input => input.split(' ').map(Number));

const getShortest = (sx, sy, sdir) => {
  const dx = [0, 0, 0, 1, -1];
  const dy = [0, 1, -1, 0, 0];

  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(5).fill(0))
  );
  visited[sx][sy][sdir] = 1;

  const isEnable = (nx, ny, dir) => {
    if (nx < 0 || nx >= m || ny < 0 || ny >= n) return false;
    if (visited[nx][ny][dir]) return false;
    return true;
  };

  const countByRotation = (current, target) => {
    if (current === target) return 0;
    if (current * target === 2 || current * target === 12) return 2;
    return 1;
  };

  const queue = [[sx, sy, sdir, 0]];
  while (queue.length) {
    const [x, y, dir, count] = queue.shift();
    if (x === end[0] - 1 && y === end[1] - 1) {
      return count + countByRotation(dir, end[2]);
    }

    for (let dist = 1; dist <= 3; dist++) {
      const [nx, ny] = [x + dx[dir] * dist, y + dy[dir] * dist];
      if (!isEnable(nx, ny, dir)) continue;
      if (board[nx][ny]) break;

      visited[nx][ny][dir] = 1;
      queue.push([nx, ny, dir, count + 1]);
    }

    for (let nextDir = 1; nextDir <= 4; nextDir++) {
      if (visited[x][y][nextDir]) continue;

      visited[x][y][nextDir] = 1;
      queue.push([x, y, nextDir, count + countByRotation(dir, nextDir)]);
    }
  }
};
console.log(getShortest(start[0] - 1, start[1] - 1, start[2]));
