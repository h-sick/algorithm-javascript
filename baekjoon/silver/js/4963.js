// 섬의 개수

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/4963.txt')
  .toString()
  .split('\n');

let index = 0;
while (inputs[index][0] != 0) {
  const [w, h] = inputs[index].split(' ').map(Number);
  let map = Array.from({ length: h }, (_, i) =>
    inputs[index + i + 1].split(' ').map(Number)
  );
  const dx = [1, 0, -1, 0, 1, -1, -1, 1];
  const dy = [0, -1, 0, 1, -1, -1, 1, 1];
  function dfs(x, y) {
    if (map[x][y] === 0) return;
    map[x][y] = 0;
    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
        dfs(nx, ny);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === 0) continue;
      dfs(i, j);
      count++;
    }
  }
  console.log(count);
  index += h + 1;
}
