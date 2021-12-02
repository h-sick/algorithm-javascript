// 문자열 폭발

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/9935.txt')
  .toString()
  .split('\n');

let string = inputs[0].trim();
const bomb = inputs[1].trim();
const bombLength = bomb.length;

const stack = [];
for (let i = 0; i < string.length; i++) {
  if (string[i] === bomb[bombLength - 1]) {
    let stackIndex = stack.length - 1;
    let isBomb = true;
    for (let j = bombLength - 2; j >= 0; j--) {
      if (bomb[j] !== stack[stackIndex--]) {
        isBomb = false;
        stack.push(string[i]);
        break;
      }
    }
    if (isBomb) {
      for (let k = 0; k < bombLength - 1; k++) stack.pop();
    }
  } else stack.push(string[i]);
}
console.log(stack.join('') || 'FRULA');
