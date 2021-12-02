// 내려가기

const inputs = require('fs')
  .readFileSync('../text/2096.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
inputs.shift();

let scores = inputs.map((input) => input.split(' ').map(Number));

let max = Array.from({ length: 2 }, () => [0, 0, 0]);
let min = Array.from({ length: 2 }, () => [0, 0, 0]);
max[0] = [...scores[0]];
min[0] = [...scores[0]];

// 확인한 값은 지워주는 슬라이딩 윈도우 기법
for (let i = 1; i < n; i++) {
  max[1] = [
    scores[i][0] + Math.max(max[0][0], max[0][1]),
    scores[i][1] + Math.max(max[0][0], max[0][1], max[0][2]),
    scores[i][2] + Math.max(max[0][1], max[0][2]),
  ];
  min[1] = [
    scores[i][0] + Math.min(min[0][0], min[0][1]),
    scores[i][1] + Math.min(min[0][0], min[0][1], min[0][2]),
    scores[i][2] + Math.min(min[0][1], min[0][2]),
  ];
  [max[0], max[1]] = [max[1], [0, 0, 0]];
  [min[0], min[1]] = [min[1], [0, 0, 0]];
  console.log(max, min);
}
console.log(Math.max(...max[0]), Math.min(...min[0]));

// 메모리 초과
// let max = Array.from({ length: n }, () => Array(3));
// let min = Array.from({ length: n }, () => Array(3));
// max[0] = [...scores[0]];
// min[0] = [...scores[0]];

// for (let i = 1; i < n; i++) {
//   max[i] = [
//     scores[i][0] + Math.max(max[i - 1][0], max[i - 1][1]),
//     scores[i][1] + Math.max(max[i - 1][0], max[i - 1][1], max[i - 1][2]),
//     scores[i][2] + Math.max(max[i - 1][1], max[i - 1][2]),
//   ];
//   min[i] = [
//     scores[i][0] + Math.min(min[i - 1][0], min[i - 1][1]),
//     scores[i][1] + Math.min(min[i - 1][0], min[i - 1][1], min[i - 1][2]),
//     scores[i][2] + Math.min(min[i - 1][1], min[i - 1][2]),
//   ];
// }
// console.log(Math.max(...max[n - 1]), Math.min(...min[n - 1]));
