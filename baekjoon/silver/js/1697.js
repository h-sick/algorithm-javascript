const inputs = require('fs')
  .readFileSync('../text/1697.txt')
  .toString()
  .split(' ')
  .map(Number);
let [n, k] = [inputs[0], inputs[1]];
if (n === k) {
  console.log(0);
  return;
}

let visited = Array(100001).fill(0);
visited[n] = 1;

let queue = [n];
let level = 0;
function bfs() {
  while (queue.length) {
    level++;
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const currentLocation = queue.shift();
      const jumpingPoints = [
        currentLocation * 2,
        currentLocation + 1,
        currentLocation - 1,
      ];

      for (const jumpingPoint of jumpingPoints) {
        if (jumpingPoint === k) return level;
        if (visited[jumpingPoint]) continue;
        if (jumpingPoint < 0 || jumpingPoint > 100000) continue;
        visited[jumpingPoint] = 1;
        queue.push(jumpingPoint);
      }
    }
  }
}
console.log(bfs());
