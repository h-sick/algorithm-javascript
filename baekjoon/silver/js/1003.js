// 피보나치 함수

const path = require('path');
const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? 'dev/stdin'
      : path.join(
          __dirname,
          `../text/${path.basename(__filename).split('.')[0]}.txt`
        )
  )
  .toString()
  .trim()
  .split('\n');

const n = +inputs[0];
const nums = inputs.slice(1, n + 1).map(Number);

const memo = Array.from(Array(41), () => Array(2).fill(0));

const fibonacci = num => {
  if (num === 0) return (memo[num] = [1, 0]);
  if (num === 1) return (memo[num] = [0, 1]);

  if (memo[num][0] !== 0 && memo[num][1] !== 0) {
    return memo[num];
  }

  const [zero1, one1] = fibonacci(num - 1);
  const [zero2, one2] = fibonacci(num - 2);
  return (memo[num] = [zero1 + zero2, one1 + one2]);
};

nums.forEach(num => {
  console.log(fibonacci(num).join(' '));
});

// nums.forEach(num => {
//   let zero = 1;
//   let one = 0;

//   for (let i = 1; i <= num; i++) {
//     const temp = zero;
//     zero = one;
//     one = temp + one;
//   }
//   console.log(zero + ' ' + one);
// });
