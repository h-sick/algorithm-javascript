// 돌 그룹

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/12886.txt'
  )
  .toString()
  .trim()
  .split('\n')[0];

const [x, y, z] = inputs.split(' ').map(Number);

const canMakeSame = (x, y, z) => {
  if ((x + y + z) % 3 !== 0) return 0;
  if (x === y && y === z) return 1;

  const checked = {};
  const queue = [[x, y, z].sort((a, b) => a - b)];

  const isAllSameNumbers = (numbers) => {
    const [x, y, z] = numbers;
    if (x === y && y === z) return true;
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const joinedNumbers = sortedNumbers.join('');
    if (checked[joinedNumbers]) return;
    checked[joinedNumbers] = 1;
    queue.push(sortedNumbers);
  };

  while (queue.length) {
    const [x, y, z] = queue.shift();
    if (x < y && isAllSameNumbers([x + x, y - x, z])) return 1;
    if (x < z && isAllSameNumbers([x + x, y, z - x])) return 1;
    if (y < z && isAllSameNumbers([x, y + y, z - y])) return 1;
  }
  return 0;
};
console.log(canMakeSame(x, y, z));
