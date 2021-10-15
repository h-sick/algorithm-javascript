const inputs = require('fs')
  .readFileSync('../text/2606.txt')
  .toString()
  .split('\n');

let graph = new Map();
for (let i = 2; i < inputs.length; i++) {
  inputs[i] = inputs[i].split(' ').map(Number);
  graph.set(inputs[i][0], [...(graph.get(inputs[i][0]) || []), inputs[i][1]]);
  graph.set(inputs[i][1], [...(graph.get(inputs[i][1]) || []), inputs[i][0]]);
}

const totalComputer = Number(inputs[0]);
let visited = Array(totalComputer).fill(0);
function recursion(level) {
  if (visited[level]) return;
  visited[level] = 1;
  graph.get(level)?.forEach((node) => {
    if (!visited[node]) recursion(node);
  });
}
recursion(1);
console.log(visited.reduce((acc, cur) => acc + cur, 0) - 1);
