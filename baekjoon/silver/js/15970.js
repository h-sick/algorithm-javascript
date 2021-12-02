// 화살표 그리기

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/15970.txt'
  )
  .toString()
  .split('\n');

let n = +inputs[0];
let points = [[], []];
for (let i = 1; i <= n; i++) {
  const [point, color] = inputs[i].split(' ').map(Number);
  if (color === 1) points[0].push(point);
  if (color === 2) points[1].push(point);
}
points.forEach((point) => point.sort((a, b) => a - b));

let count = 0;
for (let index = 0; index < 2; index++) {
  const point = points[index];
  count += point[1] - point[0];
  for (let i = 1; i < point.length - 1; i++) {
    count += Math.min(point[i] - point[i - 1], point[i + 1] - point[i]);
  }
  count += point[point.length - 1] - point[point.length - 2];
}
console.log(count);
