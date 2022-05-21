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

const [v, e] = inputs[0].split(' ').map(Number);
const k = +inputs[1];

const graph = Array.from({ length: v + 1 }, () => Array());
for (let i = 2; i < 2 + e; i++) {
  const [u, v, w] = inputs[i].split(' ').map(Number);
  graph[u].push([v, w]);
}

const dists = Array(v + 1).fill(Infinity);
dists[k] = 0;

const queue = [[k, 0]];
while (queue.length) {
  const [point, costToPoint] = queue.shift();

  for (const [to, cost] of graph[point]) {
    if (costToPoint + cost < dists[to]) {
      dists[to] = costToPoint + cost;
      queue.push([to, dists[to]]);
    }
  }
}

const result = dists.slice(1).map(dist => (dist === Infinity ? 'INF' : dist));
result.forEach(dist => console.log(dist));
