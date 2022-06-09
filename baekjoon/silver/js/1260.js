// DFS와 BFS

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

const [n, m, v] = inputs[0].split(' ').map(Number);

const graph = {};
for (let i = 1; i <= m; i++) {
  const [start, end] = inputs[i].split(' ').map(Number);
  if (!graph[start]) graph[start] = [];
  if (!graph[end]) graph[end] = [];
  graph[start].push(end);
  graph[end].push(start);
}
const keys = Object.keys(graph).sort((a, b) => a - b);
keys.forEach(key => graph[key].sort((a, b) => a - b));

let checked = Array(n + 1).fill(0);
checked[v] = 1;

let finished = false;
const result = [[], []];
const dfs = from => {
  if (finished) return;
  result[0].push(from);
  if (result[0].length === n) {
    finished = true;
    return;
  }

  if (graph[from]) {
    for (const to of graph[from]) {
      if (checked[to]) continue;
      checked[to] = 1;
      dfs(to);
    }
  }
};
dfs(v, [v]);

checked = Array(n + 1).fill(0);
checked[v] = 1;

const bfs = () => {
  const queue = [v];
  while (queue.length) {
    const from = queue.shift();
    result[1].push(from);

    if (graph[from]) {
      for (const to of graph[from]) {
        if (checked[to]) continue;
        checked[to] = 1;
        queue.push(to);
      }
    }
  }
};
bfs();

result.forEach(route => console.log(route.join(' ')));
