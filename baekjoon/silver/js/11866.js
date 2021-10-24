const inputs = require('fs')
  .readFileSync('11866.txt')
  .toString()
  .split(' ')
  .map(Number);
const n = inputs[0];
const k = inputs[1];

let peoples = Array(n)
  .fill(0)
  .map((_, i) => i + 1);
let answer = [];

while (peoples.length) {
  for (let i = 0; i < k - 1; i++) {
    peoples.push(peoples.shift());
  }
  answer.push(peoples.shift());
}
console.log(`<${answer.join(', ')}>`);
