// 출석체크

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

const [n, k, q, m] = inputs[0].split(' ').map(Number);
const dozers = inputs[1].split(' ').map(Number);
const coders = inputs[2].split(' ').map(Number);
const ranges = inputs
  .slice(3, 3 + m)
  .map(input => input.split(' ').map(Number));

const students = Array(n + 3).fill(1);

for (const coder of coders) {
  if (dozers.includes(coder)) {
    continue;
  }

  let multiple = coder;
  while (multiple <= n + 2) {
    if (!dozers.includes(multiple)) {
      students[multiple] = 0;
    }
    multiple += coder;
  }
}

for (let i = 0; i < 3 + n; i++) {
  if (i < 3) students[i] = 0;
  else students[i] = students[i] ? students[i - 1] + 1 : students[i - 1];
}

ranges.forEach(([start, end]) =>
  console.log(students[end] - students[start - 1])
);
