// 같이 눈사람 만들래?

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
const heights = inputs[1].split(' ').map(Number);
heights.sort((a, b) => a - b);

const getMinDiff = (n, heights) => {
  let minDiff = 10 ** 9;
  const snowMan = [0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = i + 3; j < n; j++) {
      snowMan[0] = heights[i] + heights[j];
      let [left, right] = [i + 1, j - 1];

      while (left <= right) {
        snowMan[1] = heights[left] + heights[right];
        if (Math.abs(snowMan[1] - snowMan[0]) < minDiff) {
          minDiff = Math.abs(snowMan[1] - snowMan[0]);
        }
        if (snowMan[0] > snowMan[1]) left++;
        if (snowMan[0] < snowMan[1]) right--;
        if (snowMan[0] === snowMan[1]) return 0;
      }
    }
  }
  return minDiff;
};
console.log(getMinDiff(n, heights));
