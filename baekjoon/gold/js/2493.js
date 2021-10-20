// 탑

const inputs = require('fs')
  .readFileSync('../text/2493.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
const tops = inputs[1].split(' ').map(Number);

let stack = [];
let answer = Array(n).fill(0);
for (let i = n - 1; i >= 0; i--) {
  while (stack.length && tops[i] > tops[stack[stack.length - 1]]) {
    answer[stack.pop()] = i + 1;
  }
  stack.push(i);
}
console.log(answer.join(' '));

// 5 4 6 2 3 => 0 1 0 3 3
