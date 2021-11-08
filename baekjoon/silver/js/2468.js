// 안전 영역
// dfs(재귀)로 풀면 런타임 에러 (StackSizeExceeded)
// bfs로 풀면 된다고함

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2468.txt')
  .toString()
  .split('\n');

const mapSize = +inputs[0];
let map = Array.from({ length: mapSize }, () => Array(mapSize).fill(0));
for (let i = 0; i < mapSize; i++) {
  const input = inputs[i + 1].split(' ').map(Number);
  for (let j = 0; j < mapSize; j++) {
    map[i][j] = input[j];
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let visited = Array.from({ length: mapSize }, () => Array(mapSize).fill(0));

let height = 0;
function dfs(x, y) {
  visited[x][y] = 1;
  // if (map[x][y] <= height) return;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (
      nx >= 0 &&
      nx < mapSize &&
      ny >= 0 &&
      ny < mapSize &&
      visited[nx][ny] === 0 &&
      map[nx][ny] > height
    )
      dfs(nx, ny);
  }
}

let max = 0;
for (; height <= mapSize; height++) {
  let count = 0;
  visited = Array.from({ length: mapSize }, () => Array(mapSize).fill(0));
  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < mapSize; j++) {
      if (visited[i][j] === 1) continue;
      if (map[i][j] > height) {
        dfs(i, j);
        count++;
      }
    }
  }
  max = Math.max(max, count);
}
console.log(max);
