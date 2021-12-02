// 유기농 배추

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1012.txt')
  .toString()
  .split('\n');

let tests = +inputs[0];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let j = 1;
for (let i = 0; i < tests; i++) {
  let [m, n, k] = inputs[j++].split(' ').map(Number);
  let farm = Array.from({ length: n }, () => Array(m).fill(0));
  const end = j + k;
  for (; j < end; j++) {
    const [x, y] = inputs[j].split(' ').map(Number);
    farm[y][x] = 1;
  }

  let worms = 0,
    queue = [];
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      if (farm[a][b] === 1) {
        worms++;
        farm[a][b] = 0;
        queue.push([a, b]);

        while (queue.length) {
          const [x, y] = queue.shift();
          for (let c = 0; c < 4; c++) {
            const [nx, ny] = [x + dx[c], y + dy[c]];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && farm[nx][ny] === 1) {
              queue.push([nx, ny]);
              farm[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
  console.log(worms);
}
