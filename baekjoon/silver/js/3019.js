// 테트리스

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

const [c, p] = inputs[0].split(' ').map(Number);
const heights = inputs[1].split(' ').map(Number);

const blocks = {
  1: ['0', '0000'],
  2: ['00'],
  3: ['001', '10'],
  4: ['100', '01'],
  5: ['000', '101', '10', '01'],
  6: ['000', '00', '20', '011'],
  7: ['000', '00', '02', '110'],
};

let count = 0;
blocks[p].forEach(block => {
  for (let i = 0; i <= c - block.length; i++) {
    const distance = heights[i] - Number(block[0]);

    let isFill = true;
    for (let j = i + 1; j < i + block.length; j++) {
      if (heights[j] - Number(block[j - i]) !== distance) {
        isFill = false;
        break;
      }
    }
    if (isFill) count += 1;
  }
});
console.log(count);
