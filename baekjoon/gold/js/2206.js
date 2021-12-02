// 벽 부수고 이동하기
const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2206.txt')
  .toString()
  .split('\n');
const [n, m] = inputs[0].split(' ').map(Number);

let map = Array.from(Array(n), () => Array(m));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    map[i][j] = Number(inputs[i + 1][j]);
  }
}

function bfs() {
  let visited = Array.from({ length: n }, () =>
    Array(m)
      .fill(0)
      .map((_) => [0, 0])
  );
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let queue = [];
  queue.push([0, 0, 0, 1]);
  while (queue.length) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const [x, y, crush, dists] = queue.shift();

      if (x === n - 1 && y === m - 1) return dists;
      for (let j = 0; j < 4; j++) {
        const [nx, ny] = [x + dx[j], y + dy[j]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (map[nx][ny] === 0 && visited[nx][ny][crush] === 0) {
            queue.push([nx, ny, crush, dists + 1]);
            visited[nx][ny][crush] = 1;
          }
          if (map[nx][ny] === 1 && crush === 0 && visited[nx][ny][1] === 0) {
            queue.push([nx, ny, 1, dists + 1]);
            visited[nx][ny][1] = 1;
          }
        }
      }
    }
  }
  return -1;
}
console.log(bfs());

// const inputs = require('fs')
//   .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2206.txt')
//   .toString()
//   .split('\n');
// const n = Number(inputs[0][0]);
// const m = Number(inputs[0][2]);

// let map = Array.from(Array(n), () => Array(m));
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     map[i][j] = Number(inputs[i + 1][j]);
//   }
// }

// function bfs() {
//   let dists = Array.from({ length: n }, () =>
//     Array(m)
//       .fill(0)
//       .map((_) => [0, 0])
//   );
//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   let distance = 1;
//   let queue = [];
//   queue.push([0, 0, 0]);
//   while (queue.length) {
//     const queueSize = queue.length;
//     for (let i = 0; i < queueSize; i++) {
//       const [x, y, crush] = queue.shift();
//       dists[x][y][crush] = distance;
//       if (x === n - 1 && y === m - 1) return dists[n - 1][m - 1][1];
//       for (let j = 0; j < 4; j++) {
//         const [nx, ny] = [x + dx[j], y + dy[j]];
//         if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
//           if (map[nx][ny] === 0 && dists[nx][ny][0] === 0)
//             queue.push([nx, ny, crush]);
//           if (map[nx][ny] === 1 && crush === 0 && dists[nx][ny][1] === 0)
//             queue.push([nx, ny, 1]);
//         }
//       }
//     }
//     distance++;
//   }
//   return -1;
// }
// console.log(bfs());

///////////////////////////////////////////////
// const k = 1;
// const dx = [0, 0, 1, -1];
// const dy = [1, -1, 0, 0];

// const visited = new Array(n)
//   .fill(0)
//   .map(() => new Array(m).fill(0).map(() => new Array(k + 1).fill(false)));
// const queue = [];

// queue.push({ x: 0, y: 0, cost: 1, k });

// let result = -1;
// while (queue.length) {
//   const { x, y, cost, k } = queue.shift();

//   if (x === n - 1 && y === m - 1) {
//     result = cost;
//     break;
//   }
//   if (visited[x][y][k] === true) continue;

//   visited[x][y][k] = true;

//   for (let i = 0; i < dx.length; i++) {
//     const next = { x: x + dx[i], y: y + dy[i], cost: cost + 1, k };
//     if (next.x < 0 || next.x >= n || next.y < 0 || next.y >= m) continue;
//     if (map[next.x][next.y] === 1) {
//       if (k > 0) next.k -= 1;
//       else continue;
//     }
//     queue.push(next);
//   }
// }

// console.log(result);
///////////////////////////////////////////////////////

// let distances = Array.from(Array(n), () => Array(m).fill(0));

// let result = -1;
// let destroy = false;
// const visited = new Array(n)
//   .fill(0)
//   .map(() => new Array(m).fill(0).map(() => new Array(k + 1).fill(false)));
// console.log(visited);
// // function bfs(x, y) {
// //   let queue = [];
// //   queue.push([x, y]);
// //   map[x][y] = 1;

// //   while(queue.length){
// //     let current = queue.shift();
// //     for(let i=0; i<4; i++) {
// //       const [nx, ny] = [current[0] + dx[i], current[1] + dy[i]];
// //       if(nx >=0 && nx < n && ny >=0 && ny < m) {
// //         if(map[nx][ny] === 0) {
// //           map[nx][ny] = 1;
// //           distances[nx][ny] = distances[current[0]][current[1]] + 1;
// //           queue.push([nx, ny]);
// //         }else if(!destroy) {
// //           destroy = true;
// //           map[nx][ny] = 1;
// //           distances[nx][ny] = distances[current[0]][current[1]] + 1;
// //           queue.push([nx, ny]);
// //         }
// //       }
// //     }
// //   }
// // }
// // bfs(0, 0)

// if (!result) console.log(-1);
// console.log(result);
