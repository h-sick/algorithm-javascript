// 뱀

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/3190.txt')
  .toString()
  .trim()
  .split('\n');

const n = +inputs[0];
const k = +inputs[1];
const board = Array.from({ length: n }, () => Array(n).fill(0));
let index = 2;
for (index; index < k + 2; index++) {
  const [appleX, appleY] = inputs[index].split(' ').map(Number);
  board[appleX - 1][appleY - 1] = 1;
}
const timeCount = +inputs[index++];
const lastIndex = index + timeCount;
const timers = [];
for (index; index < lastIndex; index++) {
  timers.push(inputs[index].split(' ').map((v) => v.trim()));
}

const getTimeOfGame = () => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const snakeCurrent = Array.from({ length: n }, () => Array(n).fill(0));
  snakeCurrent[0][0] = 1;

  let timer = 1;
  let direction = 1;
  const [tail, head] = [
    [0, 0],
    [0, 0],
  ];

  const turningPoint = {
    x: [],
    y: [],
    direction: [],
  };

  const moveTail = (direction) => {
    tail[0] += dx[direction];
    tail[1] += dy[direction];
  };

  while (true) {
    head[0] += dx[direction];
    head[1] += dy[direction];
    if (head[0] >= 0 && head[0] < n && head[1] >= 0 && head[1] < n) {
      if (snakeCurrent[head[0]][head[1]] === 1) return timer;
      snakeCurrent[head[0]][head[1]] = 1;
      if (board[head[0]][head[1]] === 0) {
        snakeCurrent[tail[0]][tail[1]] = 0;
        if (turningPoint.direction.length) {
          if (tail[0] === turningPoint.x[0] && tail[1] === turningPoint.y[0]) {
            turningPoint.x.shift();
            turningPoint.y.shift();
            turningPoint.direction.shift();
            if (turningPoint.direction[0]) moveTail(turningPoint.direction[0]);
            else moveTail(direction);
          } else moveTail(turningPoint.direction[0]);
        } else {
          moveTail(direction);
        }
      }
    } else return timer;
    if (timers.length && +timers[0][0] === timer) {
      turningPoint.x.push(head[0]);
      turningPoint.y.push(head[1]);
      turningPoint.direction.push(direction);
      if (timers[0][1] === 'D') direction = (direction + 1) % 4;
      if (timers[0][1] === 'L') direction = (direction - 1) % 4;
      if (direction < 0) direction += 4;
      timers.shift();
    }
    timer++;
  }
};
console.log(getTimeOfGame());
