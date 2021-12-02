// 순열 사이클

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/10451.txt'
  )
  .toString()
  .split('\n');

let t = +inputs[0];
for (let index = 0; index < t; index++) {
  let n = +inputs[index * 2 + 1];
  let p = inputs[(index + 1) * 2].split(' ').map(Number);

  let visited = Array(n + 1).fill(0);
  let count = 0;
  for (let j = 0; j < n; j++) {
    let firstPoint = j + 1;
    if (visited[firstPoint]) continue;

    let [start, end] = [firstPoint, p[j]];
    while (firstPoint !== end) {
      visited[start] = 1;
      [start, end] = [end, p[end - 1]];
    }
    count++;
    visited[start] = 1;
    visited[end] = 1;
  }
  console.log(count);
}
