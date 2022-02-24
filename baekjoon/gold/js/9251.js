// LCS

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

const [str1, str2] = [inputs[0], inputs[1]].map(v => ' ' + v.trim());

const lengths = Array.from({ length: str1.length }, () =>
  Array(str2.length).fill(0)
);

for (let i = 1; i < str1.length; i++) {
  for (let j = 1; j < str2.length; j++) {
    if (str1[i] === str2[j]) lengths[i][j] = lengths[i - 1][j - 1] + 1;
    else lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
  }
}
console.log(lengths[str1.length - 1][str2.length - 1]);
