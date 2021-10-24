const inputs = require('fs')
  .readFileSync('../text/1764.txt')
  .toString()
  .split('\n');

const [n, m] = inputs[0].split(' ').map(Number);
let neverHeard = [];
for (let i = 0; i < n; i++) {
  neverHeard.push(inputs[i + 1]);
}
let hash = new Map();
for (let i = 0; i < m; i++) {
  hash.set(inputs[i + 1 + n], 1);
}

let answer = [];
neverHeard.forEach((name) => {
  if (hash.has(name)) answer.push(name);
});
console.log(answer.length);
answer.sort().forEach((name) => console.log(name));
