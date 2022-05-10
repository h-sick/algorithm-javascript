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

const saws = inputs.slice(0, 4).map(saw => saw.trim().split('').map(Number));
const turns = [];
for (let i = 5; i < 5 + Number(inputs[4]); i++) {
  turns.push(inputs[i].split(' ').map(Number));
}

const turnWheel = (num, dir) => {
  num = num - 1;
  if (dir === 1) saws[num] = [saws[num][7], ...saws[num].slice(0, 7)];
  if (dir === -1) saws[num] = [...saws[num].slice(1, 8), saws[num][0]];
};

const shouldTurn = (num1, num2) => {
  if (saws[num1 - 1][2] !== saws[num2 - 1][6]) return true;
  return false;
};

for (const turn of turns) {
  let [num, dir] = turn;

  const willTurn = [[num, dir]];
  let [left, right] = [true, true];
  for (let i = 0; i < 3; i++) {
    dir *= -1;
    if (right && num + i + 1 <= 4 && shouldTurn(num + i, num + i + 1)) {
      willTurn.push([num + i + 1, dir]);
    } else right = false;
    if (left && num - i - 1 >= 1 && shouldTurn(num - i - 1, num - i)) {
      willTurn.push([num - i - 1, dir]);
    } else left = false;
  }

  for (const [wheelNum, turnDir] of willTurn) {
    turnWheel(wheelNum, turnDir);
  }
}

let score = 0;
for (let i = 0; i < saws.length; i++) {
  if (saws[i][0]) score += Math.pow(2, i);
}
console.log(score);
