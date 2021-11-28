// 장난감 조립

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2637.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
const m = +inputs[1];
const graph = Array.from({ length: n + 1 }, () => Array());
const indegrees = Array(n + 1).fill(0);

for (let i = 2; i < m + 2; i++) {
  const [x, y, k] = inputs[i].split(' ').map(Number);
  graph[y].push([x, k]);
  indegrees[x]++;
}

const queue = [];
const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  if (indegrees[i] === 0) {
    queue.push(i);
    dp[i][i] = 1;
  }
}

while (queue.length) {
  const from = queue.shift();
  for (const [to, count] of graph[from]) {
    for (let i = 1; i <= to; i++) {
      dp[i][to] += dp[i][from] * count;
    }
    indegrees[to]--;
    if (indegrees[to] === 0) queue.push(to);
  }
}

for (let i = 1; i <= n; i++) {
  if (dp[i][n]) console.log(`${i} ${dp[i][n]}`);
}
