// 크게 만들기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2812.txt')
  .toString()
  .split('\n');

let [n, k] = inputs[0].split(' ').map(Number);

let stack = [],
  left = n - k;
for (let i = 0; i < n; i++) {
  while (stack[stack.length - 1] < inputs[1][i] && left < n - i) {
    stack.pop();
    left++;
  }
  if (left > 0) {
    stack.push(inputs[1][i]);
    left--;
  }
}
console.log(stack.join(''));
