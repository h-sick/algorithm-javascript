// 가희와 키워드

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/22233.txt'
  )
  .toString()
  .split('\n');

let [n, m] = inputs[0].split(' ').map(Number);
let keywords = new Map();
for (let i = 1; i <= n; i++) {
  keywords.set(inputs[i].trim(), 1);
}

let blogs = Array.from({ length: m }, () => Array());
for (let i = n + 1; i <= n + m; i++) {
  blogs[i - n - 1] = inputs[i].split(',').map((v) => v.trim());
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < blogs[i].length; j++) {
    if (keywords.get(blogs[i][j]) === 1) n--;
    keywords.delete(blogs[i][j]);
  }
  console.log(n);
}
