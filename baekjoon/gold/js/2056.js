// 작업

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2056.txt')
  .toString()
  .split('\n');
const n = +inputs[0];

const inGraph = Array.from({ length: n + 1 }, () => Array());
const outGraph = Array.from({ length: n + 1 }, () => Array());
const indegrees = Array(n + 1).fill(0);
const times = Array(n + 1).fill(0);
const dp = Array(n + 1).fill(Number.MIN_SAFE_INTEGER);

for (let i = 1; i <= n; i++) {
  const work = inputs[i].split(' ').map(Number);
  const [time, count] = [work[0], work[1]];

  if (count === 0) times[i] = time;
  for (let j = 2; j < count + 2; j++) {
    inGraph[i].push(work[j]);
    outGraph[work[j]].push(i);
    indegrees[i]++;
    times[i] = time;
  }
}

let sum = 0;
const queue = [];
for (let i = 1; i <= n; i++) {
  if (indegrees[i] === 0) {
    queue.push(i);
    dp[i] = times[i];
  }
}

while (queue.length) {
  const start = queue.shift();
  for (const before of inGraph[start]) {
    dp[start] = Math.max(dp[start], dp[before] + times[start]);
  }
  if (inGraph[start].length === 0) dp[start] = Math.max(dp[start]);
  for (const end of outGraph[start]) {
    indegrees[end]--;
    if (indegrees[end] === 0) queue.push(end);
  }
}
console.log(Math.max(...dp));
