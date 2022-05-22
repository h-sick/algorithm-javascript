// 최단경로

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

const graph = Array.from({ length: v + 1 }, () => Array());
for (let i = 2; i < 2 + e; i++) {
  const [u, v, w] = inputs[i].split(' ').map(Number);
  graph[u].push([v, w]);
}

const dists = Array(v + 1).fill(Infinity);
dists[k] = 0;

const minHeap = new MinHeap();
minHeap.insert([k, 0]);

while (minHeap.size()) {
  const [point, costToPoint] = minHeap.get();

  for (const [to, cost] of graph[point]) {
    if (costToPoint + cost < dists[to]) {
      dists[to] = costToPoint + cost;
      minHeap.insert([to, dists[to]]);
    }
  }
}

const result = dists.slice(1).map(dist => (dist === Infinity ? 'INF' : dist));
result.forEach(dist => console.log(dist));

// const [v, e] = inputs[0].split(' ').map(Number);
// const k = +inputs[1];

// const graph = Array.from({ length: v + 1 }, () => Array());
// for (let i = 2; i < 2 + e; i++) {
//   const [u, v, w] = inputs[i].split(' ').map(Number);
//   graph[u].push([v, w]);
// }

// const dists = Array(v + 1).fill(Infinity);
// dists[k] = 0;

// const queue = [[k, 0]];
// while (queue.length) {
//   const [point, costToPoint] = queue.shift();

//   for (const [to, cost] of graph[point]) {
//     if (costToPoint + cost < dists[to]) {
//       dists[to] = costToPoint + cost;
//       queue.push([to, dists[to]]);
//     }
//   }
// }

// const result = dists.slice(1).map(dist => (dist === Infinity ? 'INF' : dist));
// result.forEach(dist => console.log(dist));
