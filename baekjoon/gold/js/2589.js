// 보물섬

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

const [height, width] = inputs.shift().split(' ').map(Number);
const map = inputs.map(input => input.trim().split(''));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const getLongestLength = (fx, fy) => {
  const queue = [[fx, fy]];
  const distances = Array.from({ length: height }, () => Array(width).fill(0));
  distances[fx][fy] = 0;

  let max = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx === fx && ny === fy) continue;
      if (
        nx >= 0 &&
        nx < height &&
        ny >= 0 &&
        ny < width &&
        map[nx][ny] === 'L' &&
        distances[nx][ny] === 0
      ) {
        distances[nx][ny] = distances[x][y] + 1;
        max = Math.max(max, distances[nx][ny]);
        queue.push([nx, ny]);
      }
    }
  }
  return max;
};

let max = 0;
map.forEach((row, i) => {
  row.forEach((square, j) => {
    if (square === 'L') {
      const length = getLongestLength(i, j);
      max = Math.max(length, max);
    }
  });
});
console.log(max);
