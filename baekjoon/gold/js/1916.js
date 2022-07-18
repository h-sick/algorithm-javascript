// 최소비용 구하기

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

const [n, m] = inputs.slice(0, 2).map(Number);
const bus = inputs.slice(2, 2 + m).map(input => input.split(' ').map(Number));
const [start, end] = inputs[2 + m].split(' ').map(Number);

const costs = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
costs[start] = 0;

const graph = Array.from({ length: n + 1 }, () => Array());
for (const [from, to, cost] of bus) {
  graph[from].push([to, cost]);
}

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

const heap = new MinHeap();
heap.insert([start, 0]);

while (heap.size()) {
  const [from, costToHere] = heap.get();
  if (costs[from] < costToHere) continue;

  for (const [to, cost] of graph[from]) {
    if (costs[to] > costs[from] + cost) {
      costs[to] = costs[from] + cost;
      heap.insert([to, cost]);
    }
  }
}
console.log(costs[end]);
