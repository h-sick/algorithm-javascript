// 나이트의 이동
const inputs = require('fs')
  .readFileSync('../text/7562.txt')
  .toString()
  .split('\n');

const testCount = +inputs[0];
let boardSizes = [],
  startPoints = [],
  endPoints = [];
for (let i = 0; i < testCount; i++) {
  boardSizes.push(+inputs[i * 3 + 1]);
  startPoints.push(inputs[i * 3 + 2].split(' ').map(Number));
  endPoints.push(inputs[i * 3 + 3].split(' ').map(Number));
}

function solution(boardSize, startPoint, endPoint) {
  if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]) return 0;
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];
  let distances = Array.from(Array(boardSize), () => Array(boardSize).fill(0));
  let board = Array.from(Array(boardSize), () => Array(boardSize).fill(0));

  let queue = [];
  queue.push(startPoint);
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
        if (board[nx][ny] === 0) {
          board[nx][ny] = 1;
          distances[nx][ny] = distances[x][y] + 1;
          queue.push([nx, ny]);
          if (nx === endPoint[0] && ny === endPoint[1])
            return distances[nx][ny];
        }
      }
    }
  }
}

for (let i = 0; i < testCount; i++) {
  console.log(solution(boardSizes[i], startPoints[i], endPoints[i]));
}
