// 다리 만들기

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2146.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
const board = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 1; i <= n; i++) {
  const rowData = inputs[i].split(' ').map(Number);
  for (let j = 0; j < rowData.length; j++) {
    if (rowData[j]) board[i - 1][j] = 1;
  }
}

let land = 0;
const lands = Array.from({ length: n }, () => Array(n).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && lands[i][j] === 0) {
      queue.push([i, j]);
      land++;
      lands[i][j] = land;
    }
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && lands[nx][ny] === 0) {
          if (board[nx][ny] === 1) {
            lands[nx][ny] = land;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

const distances = Array.from({ length: n }, () => Array(n).fill([-1, -1]));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      queue.push([i, j, 0, lands[i][j]]);
      distances[i][j] = [0, lands[i][j]];
    }
  }
}

const getShortestDistance = () => {
  const bridge = {
    min: n * 2,
    distance: n * 2,
  };
  while (queue.length) {
    const [x, y, distance, land] = queue.shift();
    if (bridge.distance < distance) return bridge.min;
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        const [targetDistance, targetLand] = distances[nx][ny];
        if (targetDistance === -1) {
          distances[nx][ny] = [distance + 1, land];
          queue.push([nx, ny, distance + 1, land]);
        } else if (targetLand !== land) {
          if (bridge.min === n * 2) bridge.distance = distance;
          bridge.min = Math.min(bridge.min, targetDistance + distance);
        }
      }
    }
  }
};
console.log(getShortestDistance());

// let shortest = Number.MAX_SAFE_INTEGER;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (board[i][j] === 1) {
//       queue.push([i, j, 0, lands[i][j]]);
//       while (queue.length) {
//         const [x, y, length, land] = queue.shift();
//         for (let k = 0; k < 4; k++) {
//           const [nx, ny] = [x + dx[k], y + dy[k]];
//           if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
//             if (length && board[nx][ny] === 1 && land !== lands[nx][ny]) {
//               shortest = Math.min(length, shortest);
//               console.log(x, y, nx, ny, length, shortest);
//               break;
//             }
//             if (board[nx][ny] === 0 && length < shortest)
//               queue.push([nx, ny, length + 1, land]);
//           }
//         }
//       }
//     }
//   }
// }
// console.log(shortest);
