// 방탈출

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/15729.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +inputs[0];
const notes = inputs[1].split(' ').map(Number);

let count = 0;
const lights = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  if (notes[i] !== lights[i]) {
    count++;
    lights[i] = lights[i] === 1 ? 0 : 1;
    lights[i + 1] = lights[i + 1] === 1 ? 0 : 1;
    lights[i + 2] = lights[i + 2] === 1 ? 0 : 1;
  }
}
console.log(count);
