// 이장님 초대
const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/9237.txt')
  .toString()
  .split('\n');

let n = +inputs[0];
let days = inputs[1].split(' ').map(Number);
days.sort((a, b) => b - a);

let max = 0;
days.forEach((day, i) => (max = Math.max(max, day + i + 1)));
console.log(max + 1);
