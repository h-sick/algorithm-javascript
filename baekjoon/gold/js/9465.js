// 스티커

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/9465.txt')
  .toString()
  .split('\n');

const repeat = +inputs[0];
for (let count = 0; count < repeat; count++) {
  const n = +inputs[count * 3 + 1];
  const stickers = Array(2).fill([]);
  stickers[0] = inputs[count * 3 + 2].split(' ').map(Number);
  stickers[1] = inputs[count * 3 + 3].split(' ').map(Number);

  const scores = Array.from({ length: n }, () => [0, 0, 0]);
  scores[0] = [0, stickers[0][0], stickers[1][0]];

  for (let i = 1; i < n; i++) {
    scores[i] = [
      Math.max(...scores[i - 1]),
      Math.max(scores[i - 1][0], scores[i - 1][2]) + stickers[0][i],
      Math.max(scores[i - 1][0], scores[i - 1][1]) + stickers[1][i],
    ];
  }
  console.log(Math.max(...scores[n - 1]));
}
