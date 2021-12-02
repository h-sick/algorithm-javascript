// 쇠막대기

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/10799.txt'
  )
  .toString()
  .split('\n')[0]
  .trim();

let count = 0;
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') stack.push('(');
  if (input[i] === ')') {
    stack.pop();
    if (input[i - 1] === ')') count++;
    else count += stack.length;
  }
}
console.log(count);
