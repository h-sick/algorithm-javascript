// 보석 상자

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

const [n, m] = inputs.shift().split(' ').map(Number);
const jewelries = Array(m).fill(0);

for (let i = 0; i < m; i++) {
  jewelries[i] = +inputs[i];
}

const countOwnJewelryPeople = jewelryCount => {
  let sum = 0;
  for (const jewerly of jewelries) {
    sum += Math.floor(jewerly / jewelryCount);
    if (jewerly % jewelryCount) sum += 1;
  }
  return sum;
};

let answer = 0;
let left = 1;
let right = Math.max(...jewelries);
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const peopleCount = countOwnJewelryPeople(mid);
  if (peopleCount > n) {
    left = mid + 1;
  } else {
    right = mid - 1;
    answer = mid;
  }
}
console.log(answer);
