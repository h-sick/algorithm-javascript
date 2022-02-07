// 단어 정렬

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
  .split('\n');

inputs.shift();
const filtered = [...new Set(inputs)];
filtered.sort((a, b) =>
  a.length === b.length ? (a > b ? 1 : -1) : a.length - b.length
);

console.log(filtered.join('\n'));
