// 최소비용 구하기 2

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
const m = +inputs[1];
const [start, end] = inputs[inputs.length - 1].split(' ').map(Number);

class MinHeap {
  constructor() {
    this.nodes = [];
  }
  insert(value) {
    this.nodes.push(value);
    this.upheap();
  }
  upheap() {
    let index = this.nodes.length - 1;
    let node = this.nodes[index];

    let parentNodeIndex = Math.floor((index - 1) / 2);
    while (index > 0 && node[1] < this.nodes[parentNodeIndex][1]) {
      this.nodes[index] = this.nodes[parentNodeIndex];
      index = parentNodeIndex;
      parentNodeIndex = Math.floor((index - 1) / 2);
    }
    this.nodes[index] = node;
  }
  downheap() {
    let index = 0;
    let node = this.nodes[index];

    while (index <= Math.floor((this.size() - 1) / 2)) {
      let childNodeIndex = index * 2 + 1;
      if (
        childNodeIndex < this.size() &&
        this.nodes[childNodeIndex + 1] &&
        this.nodes[childNodeIndex][1] > this.nodes[childNodeIndex + 1][1]
      ) {
        childNodeIndex += 1;
      }

      if (
        !this.nodes[childNodeIndex] ||
        node[1] <= this.nodes[childNodeIndex][1]
      ) {
        break;
      }

      this.nodes[index] = this.nodes[childNodeIndex];
      index = childNodeIndex;
    }
    this.nodes[index] = node;
  }
  get() {
    if (this.size() === 1) {
      return this.nodes.pop();
    }
    const node = this.nodes[0];
    this.nodes[0] = this.nodes.pop();
    this.downheap();
    return node;
  }
  size() {
    return this.nodes.length;
  }
}

const graph = Array.from({ length: m + 1 }, () => Array());
for (let i = 2; i < 2 + m; i++) {
  const [from, to, cost] = inputs[i].split(' ').map(Number);
  graph[from].push([to, cost]);
}

const calculateVisitCost = graph => {
  const costs = Array(m + 1).fill(Number.MAX_SAFE_INTEGER);
  costs[start] = 0;

  let level = 0;
  const routes = Array(m + 1).fill(0);

  const minHeap = new MinHeap();
  minHeap.insert([start, 0]);

  while (minHeap.size()) {
    const queueSize = minHeap.size();
    for (let i = 0; i < queueSize; i++) {
      const [point, pointToCost] = minHeap.get();
      for (const [to, cost] of graph[point]) {
        if (costs[to] > pointToCost + cost) {
          costs[to] = pointToCost + cost;
          minHeap.insert([to, costs[to]]);

          routes[to] = point;
        }
      }
    }
    level += 1;
  }

  const visited = [end];
  let route = end;
  while (routes[route]) {
    visited.push(routes[route]);
    route = routes[route];
  }
  return { minCost: costs[end], visited };
};

const { minCost, visited } = calculateVisitCost(graph);

console.log(minCost);
console.log(visited.length);
console.log(visited.reverse().join(' '));
