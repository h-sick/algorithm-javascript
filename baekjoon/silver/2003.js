const inputs = require('fs').readFileSync('2003.txt').toString().split('\n');
const n = Number(inputs[0].split(' ')[0]);
const m = Number(inputs[0].split(' ')[1]);
const numbers = inputs[1].split(' ').map(Number);

let left = 0,
  sum = 0,
  count = 0;
for (let right = 0; right < n; right++) {
  sum += numbers[right];
  while (sum > m) {
    sum -= numbers[left++];
  }
  if (sum === m) count++;
}
console.log(count);
