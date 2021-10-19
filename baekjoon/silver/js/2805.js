// 나무 자르기
const inputs = require('fs')
  .readFileSync('../text/2805.txt')
  .toString()
  .split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
const woods = inputs[1].split(' ').map(Number);

function measureWood(height) {
  let length = 0;
  woods.forEach((wood) => {
    if (wood > height) length += wood - height;
  });
  return length;
}

let left = 0,
  right = 2000000000;
let maxHeight = 0;
while (left <= right) {
  const mid = parseInt((left + right) / 2);
  if (measureWood(mid) < m) {
    right = mid - 1;
    continue;
  }
  left = mid + 1;
  maxHeight = mid;
}
console.log(maxHeight);
