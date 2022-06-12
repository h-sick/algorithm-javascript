// 연구소

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
const map = inputs.slice(1, n + 1).map(input => input.split(' ').map(Number));

const viruses = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      viruses.push([i, j]);
    }
  }
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const countSafeZone = points => {
  const newMap = map.map(row => [...row]);
  points.forEach(([x, y]) => (newMap[x][y] = 1));

  const checked = Array.from({ length: n }, () => Array(m).fill(0));
  viruses.forEach(([x, y]) => (checked[x][y] = 1));

  const queue = [...viruses];
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !checked[nx][ny] &&
        newMap[nx][ny] === 0
      ) {
        newMap[nx][ny] = 2;
        checked[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }

  return newMap.reduce(
    (acc, row) => acc + row.filter(num => num === 0).length,
    0
  );
};

let max = Number.MIN_SAFE_INTEGER;

const dfs = (x, y, points) => {
  if (points.length === 3) {
    const count = countSafeZone(points);
    max = Math.max(max, count);
    return;
  }

  for (let i = x; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === x && j <= y) continue;
      if (map[i][j] === 0) {
        dfs(i, j, [...points, [i, j]]);
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      dfs(i, j, [[i, j]]);
    }
  }
}
console.log(max);
