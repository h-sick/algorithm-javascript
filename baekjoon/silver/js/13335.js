// 트럭

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

const [n, w, l] = inputs[0].split(' ').map(Number);
const trucks = inputs[1].split(' ').map(Number);

let time = 0;
let weight = 0;
const bridge = Array(w).fill(0);

while (bridge.length) {
  time++;
  weight -= bridge.shift();
  if (trucks.length) {
    if (weight + trucks[0] <= l) {
      const nextTruck = trucks.shift();
      bridge.push(nextTruck);
      weight += nextTruck;
      continue;
    }
    bridge.push(0);
  }
}
console.log(time);
