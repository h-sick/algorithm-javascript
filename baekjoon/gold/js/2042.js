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

const [n, m, k] = inputs[0].split(' ').map(Number);

const nums = Array(5).fill(0);
for (let i = 0; i < n; i++) {
  nums[i] = Number(inputs[i + 1]);
}

const cmds = Array(m + k).fill([]);
for (let i = 0; i < m + k; i++) {
  cmds[i] = inputs[n + i + 1].split(' ').map(Number);
}

let startNode = 1;
while (startNode < n) startNode *= 2;

const limit = (startNode - 1) * 2 + 1;
const nodes = Array(limit + 1).fill(0);

for (let i = startNode; i < startNode + n; i++) {
  nodes[i] = nums[i - startNode];
}

for (let i = startNode - 1; i > 0; i--) {
  nodes[i] = nodes[i * 2] + nodes[i * 2 + 1];
}

const getSumRange = (start, end) => {
  start += startNode - 1;
  end += startNode - 1;
  let sum = 0;
  while (start <= end) {
    if (start % 2 === 1) sum += nodes[start];
    if (end % 2 === 0) sum += nodes[end];
    start = Math.floor((start + 1) / 2);
    end = Math.floor((end - 1) / 2);
  }
  return sum;
};

const changeNum = (index, value) => {
  index += startNode - 1;
  value -= nodes[index];
  while (index) {
    nodes[index] += value;
    index = Math.floor(index / 2);
  }
};

for (const [a, b, c] of cmds) {
  if (a === 2) console.log(getSumRange(b, c));
  if (a === 1) changeNum(b, c);
}
