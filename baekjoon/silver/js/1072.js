// 게임

let [x, y] = require('fs')
  .readFileSync('../text/1072.txt')
  .toString()
  .split('\n')[0]
  .split(' ')
  .map(Number);
const z = Math.floor((y * 100) / x);

let addedRate = z;
function isUp(win) {
  let rate = Math.floor(((y + win) * 100) / (x + win));
  if (rate > z) {
    addedRate = rate;
    return true;
  }
  return false;
}

let left = 1,
  right = 1e9,
  count = 0;
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  if (isUp(mid)) {
    count = mid;
    right = mid - 1;
    continue;
  }
  left = mid + 1;
}
if (z === addedRate) count = -1;
console.log(count);
