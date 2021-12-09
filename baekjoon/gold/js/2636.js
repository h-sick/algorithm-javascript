// 치즈

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2636.txt')
  .toString()
  .trim()
  .split('\n');

const [height, width] = inputs[0].split(' ').map(Number);
const board = Array.from({ length: height }, () => Array(width).fill(0));
for (let i = 1; i <= height; i++) {
  const line = inputs[i].split(' ').map(Number);
  for (let j = 0; j < line.length; j++) {
    if (line[j] === 1) board[i - 1][j] = 1;
  }
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const countLeftCheeze = () =>
  board.reduce((acc, cur) => acc + cur.filter((num) => num).length, 0);

const countMeltedCheeze = () => {
  const checked = Array.from({ length: height }, () => Array(width).fill(0));
  checked[0][0] = 1;
  const queue = [[0, 0]];

  let cheezeCount = 0;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < height && ny >= 0 && ny < width) {
        if (checked[nx][ny]) continue;
        checked[nx][ny] = 1;
        if (board[x][y] === 0 && board[nx][ny] === 1) {
          board[nx][ny] = 0;
          cheezeCount++;
        } else queue.push([nx, ny]);
      }
    }
  }
  return cheezeCount;
};

let cheezeMeltingCount = 0;
let meltedCheezes = 0;
while (countLeftCheeze()) {
  meltedCheezes = countMeltedCheeze();
  cheezeMeltingCount++;
}
console.log(cheezeMeltingCount);
console.log(meltedCheezes);
