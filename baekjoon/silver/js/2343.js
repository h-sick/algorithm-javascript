// 기타 레슨

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2343.txt')
  .toString()
  .split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
let lectures = inputs[1].split(' ').map(Number);

function isEnough(size) {
  let count = 1,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += lectures[i];
    if (sum > size) {
      count++;
      sum = lectures[i];
    }
  }
  return count <= m;
}

let left = Math.max(...lectures),
  right = Number.MAX_SAFE_INTEGER;
let answer = 1;
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  if (isEnough(mid)) {
    right = mid - 1;
    answer = mid;
    continue;
  }
  left = mid + 1;
}
console.log(answer);
