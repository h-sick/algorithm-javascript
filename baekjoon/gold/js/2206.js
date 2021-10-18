// 벽 부수고 이동하기
const inputs = require('fs')
  .readFileSync('../text/2206.txt')
  .toString()
  .split('\n');
const n = Number(inputs[0][0]);
const m = Number(inputs[0][2]);

let map = Array.from(Array(n), () => Array(m));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    map[i][j] = Number(inputs[i + 1][j]);
  }
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let distances = Array.from(Array(n), () => Array(m).fill(0));

let result = -1;
let destroy = false;
const visited = new Array(n)
  .fill(0)
  .map(() => new Array(m).fill(0).map(() => new Array(k + 1).fill(false)));
console.log(visited);
// function bfs(x, y) {
//   let queue = [];
//   queue.push([x, y]);
//   map[x][y] = 1;

//   while(queue.length){
//     let current = queue.shift();
//     for(let i=0; i<4; i++) {
//       const [nx, ny] = [current[0] + dx[i], current[1] + dy[i]];
//       if(nx >=0 && nx < n && ny >=0 && ny < m) {
//         if(map[nx][ny] === 0) {
//           map[nx][ny] = 1;
//           distances[nx][ny] = distances[current[0]][current[1]] + 1;
//           queue.push([nx, ny]);
//         }else if(!destroy) {
//           destroy = true;
//           map[nx][ny] = 1;
//           distances[nx][ny] = distances[current[0]][current[1]] + 1;
//           queue.push([nx, ny]);
//         }
//       }
//     }
//   }
// }
// bfs(0, 0)

if (!result) console.log(-1);
console.log(result);
