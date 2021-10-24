const inputs = require('fs')
  .readFileSync('../text/11399.txt')
  .toString()
  .split('\n');

const times = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let total = 0,
  personalTime = 0;
times.forEach((time) => {
  personalTime += time;
  total += personalTime;
});

console.log(total);
