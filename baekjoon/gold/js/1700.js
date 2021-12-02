// 멀티탭 스케줄링

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1700.txt')
  .toString()
  .split('\n');

let [n, k] = inputs[0].split(' ').map(Number);
let electrons = inputs[1].split(' ').map(Number);

let initialPlugs = new Set(),
  index = 0;
while (initialPlugs.size <= n) {
  if (initialPlugs.size === n) break;
  initialPlugs.add(electrons[index++]);
}

let inserted = [...initialPlugs],
  count = 0;

for (let i = n; i < k; i++) {
  if (inserted.indexOf(electrons[i]) === -1) {
    count++;
    let lastUsed = i,
      plugExist;
    for (let a = 0; a < inserted.length; a++) {
      plugExist = false;
      for (let b = i + 1; b < k; b++) {
        if (inserted[a] === electrons[b]) {
          lastUsed = Math.max(lastUsed, b);
          plugExist = true;
          break;
        }
      }
      if (!plugExist) {
        inserted.splice(a, 1);
        break;
      }
    }
    if (plugExist) inserted.splice(inserted.indexOf(electrons[lastUsed]), 1);
    inserted.push(electrons[i]);
  }
}
console.log(count);
