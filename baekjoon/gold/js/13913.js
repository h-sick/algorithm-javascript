// 숨바꼭질 4

const inputs = require('fs')
  .readFileSync('../text/13913.txt')
  .toString()
  .split(' ')
  .map(Number);
const n = inputs[0];
let k = inputs[1];

if (n === k) {
  console.log(0);
  console.log(n);
  return;
}

let visited = Array(100001).fill(-1);
visited[n] = 1;
let queue = [];
queue.push(n);
let time = 0;

let arrived = false;
while (queue.length && !arrived) {
  time++;
  const queueSize = queue.length;
  for (let i = 0; i < queueSize; i++) {
    let current = queue.shift();
    const movingPoints = [current + 1, current - 1, current * 2];
    for (const newPoint of movingPoints) {
      if (newPoint === k) {
        arrived = true;
        visited[k] = current;
        break;
      }
      if (visited[newPoint] !== -1) continue;
      visited[newPoint] = current;
      queue.push(newPoint);
    }
    if (arrived) break;
  }
}

let answer = [];
while (n !== k) {
  answer.unshift(k);
  k = visited[k];
}
answer.unshift(n);

console.log(time);
console.log(answer.join(' '));

// let visited = Array(100001).fill('');
// visited[n] = n;
// let queue = [];
// queue.push(n);
// let time = 0;

// let arrived = false,
//   answer;
// while (queue.length && !arrived) {
//   time++;
//   const queueSize = queue.length;
//   for (let i = 0; i < queueSize; i++) {
//     let current = queue.shift();
//     const movingPoints = [current + 1, current - 1, current * 2];
//     for (const newPoint of movingPoints) {
//       if (newPoint === k) {
//         arrived = true;
//         answer = visited[current] + ' ' + newPoint;
//         break;
//       }
//       if (visited[newPoint]) continue;
//       visited[newPoint] = visited[current] + ' ' + newPoint;
//       queue.push(newPoint);
//     }
//     if (arrived) break;
//   }
// }
// console.log(time);
// console.log(answer);
