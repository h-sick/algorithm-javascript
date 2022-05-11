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

const [n, l, r] = inputs[0].split(' ').map(Number);

const map = Array.from({ length: n }, () => Array(n).fill([]));
for (let i = 1; i <= n; i++) {
  map[i - 1] = inputs[i].split(' ').map(Number);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let day = 0;
while (true) {
  const checked = Array.from({ length: n }, () => Array(n).fill(0));

  let isOpen = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (checked[i][j]) continue;
      checked[i][j] = 1;

      let isMove = false;
      let population = 0;
      const moved = [];
      const queue = [[i, j]];
      while (queue.length) {
        const [x, y] = queue.shift();
        moved.push([x, y]);
        population += map[x][y];

        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [x + dx[k], y + dy[k]];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && !checked[nx][ny]) {
            const gap = Math.abs(map[x][y] - map[nx][ny]);
            if (gap >= l && gap <= r) {
              checked[nx][ny] = 1;
              queue.push([nx, ny]);
              isOpen = true;
              isMove = true;
            }
          }
        }
      }
      if (!isMove) {
        continue;
      }

      const divided = Math.floor(population / moved.length);
      for (const [x, y] of moved) {
        map[x][y] = divided;
      }
    }
  }

  if (!isOpen) {
    break;
  }
  day += 1;
}
console.log(day);
