// 균형잡힌 세상

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../text/4949.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let tc = 0;

while (1) {
  let stack = [];
  let str = input[tc];
  let ans = 'yes';
  if (str === '.') {
    break;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[' || str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === ']') {
      if (stack[stack.length - 1] === '[') stack.pop();
      else {
        ans = 'no';
        break;
      }
    } else if (str[i] === ')') {
      if (stack[stack.length - 1] === '(') stack.pop();
      else {
        ans = 'no';
        break;
      }
    }
  }
  if (stack.length !== 0) ans = 'no';
  console.log(ans);
  tc++;
}
