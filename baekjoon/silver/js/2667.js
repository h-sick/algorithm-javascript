// 단지번호붙이기

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

const n = +inputs[0];
const map = inputs.slice(1, n + 1).map(input => input.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const checked = Array.from({ length: n }, () => Array(n).fill(0));
const countHouses = (i, j) => {
  let count = 0;

  const queue = [[i, j]];
  while (queue.length) {
    const [x, y] = queue.shift();
    count += 1;

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        !checked[nx][ny] &&
        map[nx][ny]
      ) {
        checked[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
};

const complexes = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (checked[i][j]) continue;
    if (map[i][j]) {
      checked[i][j] = 1;
      complexes.push(countHouses(i, j));
    }
  }
}

console.log(complexes.length);
complexes.sort((a, b) => a - b).forEach(complex => console.log(complex));
