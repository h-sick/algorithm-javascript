// 트리의 부모 찾기

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
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  const [start, end] = inputs[i].split(' ').map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

const parents = Array(n + 1).fill(0);
parents[1] = 1;

const queue = [];
graph[1].forEach(node => {
  parents[node] = 1;
  queue.push(node);
});

while (queue.length) {
  const node = queue.shift();

  for (const linkedNode of graph[node]) {
    if (parents[linkedNode]) continue;
    parents[linkedNode] = node;
    queue.push(linkedNode);
  }
}
console.log(parents.slice(2).join('\n'));

// const cache = Array(n + 1).fill(false);
// const findParent = (start, node, level) => {
//   if (node === 1) return true;
//   if (level > 0 && start === node) return false;

//   for (const linkedNode of graph[node]) {
//     if (cache[linkedNode]) return linkedNode;

//     const isParent = findParent(start, linkedNode, level + 1);
//     if (isParent) {
//       cache[linkedNode] = true;
//       return linkedNode;
//     }
//   }
// };

// for (let i = 2; i <= n; i++) {
//   console.log(findParent(i, i, 0));
// }
