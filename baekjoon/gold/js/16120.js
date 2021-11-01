// PPAP

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/16120.txt'
  )
  .toString()
  .split('\n')[0];

let answer = 'PPAP';
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'A') {
    if (input[i + 1] === 'P' && stack.pop() === 'P' && stack.pop() === 'P')
      continue;
    answer = 'NP';
    break;
  }
  stack.push(input[i]);
}
if (stack.length > 1) answer = 'NP';
console.log(answer);
