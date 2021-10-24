// 오큰수
const inputs = require('fs')
  .readFileSync('../text/17298.txt')
  .toString()
  .split('\n');

let n = +inputs[0];
let nums = inputs[1].split(' ').map(Number);

let stack = [];
let answer = Array(n).fill(-1);
nums.forEach((num, i) => {
  while (stack.length && nums[stack[stack.length - 1]] < num) {
    answer[stack.pop()] = num;
  }
  stack.push(i);
});
console.log(answer.join(' '));

// let answer = [];
// for (let i = 0; i < n; i++) {
//   let found = false;
//   for (let j = i + 1; j < n; j++) {
//     if (nums[i] < nums[j]) {
//       answer.push(nums[j]);
//       found = true;
//       break;
//     }
//   }
//   if (!found) answer.push(-1);
// }
// console.log(answer.join(' '));
