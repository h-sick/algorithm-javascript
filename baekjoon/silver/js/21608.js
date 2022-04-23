// 상어 초등학교

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

const n = +inputs.shift();
const square = n * n;
const students = Array(square).fill(0);
const preferStudents = Array.from({ length: square }, () => []);

for (let i = 0; i < square; i++) {
  [students[i], ...preferStudents[i]] = inputs[i].split(' ').map(Number);
}

const positions = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let maxCount = 0;
let maxPositions = [];

const checkBoundary = (nx, ny) => nx >= 0 && nx < n && ny >= 0 && ny < n;

const compareTemp = (x, y, temp) => {
  if (temp > maxCount) {
    maxCount = temp;
    maxPositions = [[x, y]];
  } else if (temp === maxCount) {
    maxPositions.push([x, y]);
  }
};

const rules = {
  first(i) {
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (positions[x][y]) {
          continue;
        }
        let temp = 0;
        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [x + dx[k], y + dy[k]];
          if (checkBoundary(nx, ny)) {
            if (preferStudents[i].includes(positions[nx][ny])) {
              temp += 1;
            }
          }
        }
        compareTemp(x, y, temp);
      }
    }
  },
  second() {
    const prefered = maxPositions.slice();
    maxCount = 0;
    maxPositions = [];
    for (const [x, y] of prefered) {
      let temp = 0;
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (checkBoundary(nx, ny) && positions[nx][ny] === 0) {
          temp += 1;
        }
      }
      compareTemp(x, y, temp);
    }
  },
  third() {
    const [bestPosition] = maxPositions.sort((a, b) =>
      a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    );
    maxPositions = [bestPosition];
  },
};

for (let i = 0; i < square; i++) {
  for (const rule of Object.keys(rules)) {
    rules[rule](i);

    if (maxPositions.length === 1) {
      const [pos] = maxPositions;
      positions[pos[0]][pos[1]] = students[i];
      break;
    }
  }
  maxCount = 0;
  maxPositions = [];
}

let satisfy = 0;
positions.forEach((row, x) =>
  row.forEach((student, y) => {
    let temp = 0;
    const index = students.indexOf(student);
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (checkBoundary(nx, ny)) {
        if (preferStudents[index].includes(positions[nx][ny])) {
          temp += 1;
        }
      }
    }
    if (temp) {
      satisfy += Math.pow(10, temp - 1);
    }
  })
);
console.log(satisfy);
