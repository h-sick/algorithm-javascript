// 줄어드는 수

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

const getLowerNumber = n => {
  if (n >= 1024) {
    return -1;
  }

  const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const lowers = [];

  const dfs = (sum, index) => {
    if (!lowers.includes(sum)) {
      lowers.push(sum);
    }

    if (index >= 10) {
      return;
    }

    dfs(sum * 10 + nums[index], index + 1);
    dfs(sum, index + 1);
  };
  dfs(0, 0);
  return lowers.sort((a, b) => a - b)[n - 1];
};
console.log(getLowerNumber(n));
