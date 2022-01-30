// 한국이 그리울 땐 서버에 접속하지

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/9996.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
const patterns = inputs[1].split('*').map(pattern => pattern.trim());
const files = Array(n).fill(null);

for (let i = 0; i < n; i++) files[i] = inputs[i + 2].trim();

const isRightPattern = string =>
  new RegExp(`\\b${patterns[0]}\[a-z\]\+${patterns[1]}\\b`).test(string);

for (const file of files) {
  console.log(isRightPattern(file) ? 'DA' : 'NE');
}
