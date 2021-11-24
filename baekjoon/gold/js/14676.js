// 영우는 사기꾼?

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/14676.txt'
  )
  .toString()
  .split('\n');

const [n, m, k] = inputs[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => Array());
const indegrees = Array(n + 1).fill(0);

for (let i = 1; i <= m; i++) {
  const [start, end] = inputs[i].split(' ').map(Number);
  graph[start].push(end);
  indegrees[end]++;
}

function testYoungWooInfo() {
  const HONEST = 'King-God-Emperor';
  const LIER = 'Lier!';
  const built = Array(n + 1).fill(0);
  for (let i = m + 1; i <= m + k; i++) {
    const [type, building] = inputs[i].split(' ').map(Number);
    if (type === 1) {
      if (indegrees[building] === 0) {
        built[building]++;
        if (built[building] === 1) {
          for (const next of graph[building]) {
            indegrees[next]--;
          }
        }
      } else return LIER;
    }
    if (type === 2) {
      if (built[building] > 0) {
        built[building]--;
        if (built[building] === 0) {
          for (const next of graph[building]) {
            indegrees[next]++;
          }
        }
      } else return LIER;
    }
  }
  return HONEST;
}
console.log(testYoungWooInfo());
