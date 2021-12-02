// DFS와 BFS

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1260.txt')
  .toString()
  .split('\n');

let [n, m, v] = inputs[0].split(' ').map(Number);
let graph = new Map();
for (let i = 1; i <= m; i++) {
  const [start, end] = inputs[i].split(' ').map(Number);
  graph.set(start, [...(graph.get(start) || []), end]);
}
