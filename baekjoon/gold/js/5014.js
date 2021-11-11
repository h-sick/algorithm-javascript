// 스타트링크

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/5014.txt')
  .toString()
  .split('\n')[0];

let [f, s, g, u, d] = inputs.split(' ').map(Number);
if (s === g) {
  console.log(0);
  return;
}

let checked = Array(f + 1).fill(0);

function bfs() {
  let queue = [];
  queue.push([s, 0]);

  while (queue.length) {
    const [floor, step] = queue.shift();
    for (let move of [floor + u, floor - d]) {
      if (
        move >= 1 &&
        move <= f &&
        (checked[move] === 0 || step + 1 < checked[move])
      ) {
        if (move === g) return step + 1;
        queue.push([move, step + 1]);
        checked[move] = step + 1;
      }
    }
  }
  return 'use the stairs';
}
console.log(bfs());
