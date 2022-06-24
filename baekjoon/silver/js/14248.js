// 점프 점프

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
const rocks = inputs[1].split(' ').map(Number);
const s = +inputs[2];

const visited = Array(n + 1).fill(0);
visited[s] = 1;

let canVisit = 1;
const queue = [s];
while (queue.length) {
  const current = queue.shift();
  for (const dist of [rocks[current - 1], rocks[current - 1] * -1]) {
    const next = current + dist;
    if (next < 1 || next > n || visited[next]) continue;
    visited[next] = 1;
    queue.push(next);
    canVisit++;
  }
}
console.log(canVisit);
