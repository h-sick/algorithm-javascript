// A와 B 2

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

const [s, t] = inputs.slice(0, 2).map(input => input.trim());

const dfs = temp => {
  if (temp.length === s.length) {
    if (temp === s) return 1;
    return 0;
  }

  let answer = 0;
  if (temp[temp.length - 1] === 'A') {
    const result = dfs(temp.slice(0, temp.length - 1));
    answer = answer || result;
  }
  if (temp[0] === 'B') {
    const result = dfs(temp.slice(1).split('').reverse().join(''));
    answer = answer || result;
  }
  return answer;
};
console.log(dfs(t));
