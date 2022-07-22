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

nums.forEach(num => {
  let zero = 1;
  let one = 0;

  for (let i = 1; i <= num; i++) {
    const temp = zero;
    zero = one;
    one = temp + one;
  }
  console.log(zero + ' ' + one);
});
