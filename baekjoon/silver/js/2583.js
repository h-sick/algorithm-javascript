// 영역 구하기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2583.txt')
  .toString()
  .split('\n');

const [m, n, k] = inputs[0].split(' ').map(Number);
const rectangles = Array.from({ length: k }, () => Array(4));

for (let i = 1; i <= k; i++) {
  rectangles[i - 1] = inputs[i].split(' ').map(Number);
}

const board = Array.from({ length: m }, () => Array(n).fill(0));

for (const rectangle of rectangles) {
  const [x, y, nx, ny] = rectangle;
  for (let i = y; i < ny; i++) {
    for (let j = x; j < nx; j++) {
      board[m - i - 1][j] = 1;
    }
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const checked = Array.from({ length: m }, () => Array(n).fill(0));
const widths = [];

const dfs = (x, y, count) => {
  const stack = [];
  stack.push([x, y]);
  checked[x][y] = 1;

  while (stack.length) {
    [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < m &&
        ny < n &&
        !board[nx][ny] &&
        !checked[nx][ny]
      ) {
        stack.push([nx, ny]);
        checked[nx][ny] = 1;
        count += 1;
      }
    }
  }
  return count;
};

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] || checked[i][j]) continue;
    widths.push(dfs(i, j, 1));
  }
}
widths.sort((a, b) => a - b);

console.log(widths.length);
console.log(widths.join(' '));

// dfs로 구현하면 재귀 제한 횟수를 초과해서 stack size exceed 에러남
// 재귀대신 stack을 사용해서 풀어야하므로 dfs보다는 bfs로 푸는게 나은 문제
// const dfs = (x, y, count) => {
//   checked[x][y] = 1;
//   for (let i = 0; i < 4; i++) {
//     const [nx, ny] = [x + dx[i], y + dy[i]];
//     if (
//       nx >= 0 &&
//       ny >= 0 &&
//       nx < m &&
//       ny < n &&
//       !board[nx][ny] &&
//       !checked[nx][ny]
//     ) {
//       count = Math.max(dfs(nx, ny, count + 1), count);
//     }
//   }
//   return count;
// };

// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < n; j++) {
//     if (board[i][j] || checked[i][j]) continue;
//     widths.push(dfs(i, j, 1));
//   }
// }
// widths.sort((a, b) => a - b);

// console.log(widths.length);
// console.log(widths.join(' '));
