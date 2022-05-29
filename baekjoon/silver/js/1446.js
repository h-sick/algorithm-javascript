// 지름길

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

const [n, d] = inputs[0].split(' ').map(Number);

const shortCuts = [];
for (let i = 1; i <= n; i++) {
  const [from, to, length] = inputs[i].split(' ').map(Number);
  if (to <= d) {
    shortCuts.push([from, to, length]);
  }
}
shortCuts.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

const dists = Array.from({ length: d + 1 }, (_, i) => i);

let shortCutIndex = 0;
for (let i = 0; i < dists.length; i++) {
  if (i) dists[i] = Math.min(dists[i], dists[i - 1] + 1);

  while (
    shortCutIndex < shortCuts.length &&
    shortCuts[shortCutIndex][0] === i
  ) {
    const [from, to, length] = shortCuts[shortCutIndex++];
    if (dists[to] > dists[from] + length) {
      dists[to] = dists[from] + length;
    }
  }
}
console.log(dists[d]);
