// 공유기 설치

let inputs = require('fs')
  .readFileSync('../text/2110.txt')
  .toString()
  .split('\n');
let [n, c] = inputs[0].split(' ').map(Number);
inputs.shift();
let houses = [];
for (let i = 0; i < n; i++) houses.push(inputs[i]);
houses.sort((a, b) => a - b);

function countRouter(distance) {
  let count = 1;
  let lastHouse = houses[0];

  for (let i = 1; i < n; i++) {
    if (houses[i] - lastHouse >= distance) {
      count++;
      lastHouse = houses[i];
    }
  }
  return count;
}

let min = 1,
  max = 1e9,
  result = 0;

while (min <= max) {
  let mid = parseInt((min + max) / 2);
  if (countRouter(mid) >= c) {
    result = mid;
    min = mid + 1;
    continue;
  }
  max = mid - 1;
}
console.log(result);
