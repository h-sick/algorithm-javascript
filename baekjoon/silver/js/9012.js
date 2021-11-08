// 괄호

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/9012.txt')
  .toString()
  .split('\n');

let length = +inputs[0];
for (let index = 1; index <= length; index++) {
  let input = inputs[index].trim();

  let stack = [],
    answer = 'YES';
  for (let char of input) {
    if (char === '(') stack.push('(');
    if (char === ')') {
      if (stack[stack.length - 1] === '(') stack.pop();
      else {
        answer = 'NO';
        break;
      }
    }
  }
  if (stack.length > 0) answer = 'NO';
  console.log(answer);
}
