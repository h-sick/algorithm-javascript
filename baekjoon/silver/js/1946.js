// 신입사원
const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1946.txt')
  .toString()
  .split('\n');

const loops = +inputs[0];
let index = 1;
for (let l = 0; l < loops; l++) {
  const people = inputs[index++];
  let scores = [];
  for (let i = 0; i < people; i++) {
    scores.push(inputs[index++].split(' ').map(Number));
  }
  scores.sort((a, b) => a[0] - b[0]);
  let out = 0;
  let rank = scores[0][1];
  for (let i = 1; i < people; i++) {
    if (rank < scores[i][1]) out++;
    if (rank > scores[i][1]) rank = scores[i][1];
  }
  console.log(people - out);
}
