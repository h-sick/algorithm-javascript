// 물통

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

const limits = inputs[0].split(' ').map(Number);
const [a, b, c] = limits;

const water1 = [0, 0, 1, 1, 2, 2];
const water2 = [1, 2, 0, 2, 0, 1];

const visited = Array.from(Array(a + 1), () =>
  Array.from(Array(b + 1), () => Array(c + 1).fill(false))
);
visited[0][0][c] = true;

const queue = [];
queue.push([0, 0, c]);

const answer = [];
while (queue.length) {
  const cur = queue.shift();
  if (cur[0] === 0) {
    answer.push(cur[2]);
  }

  for (let i = 0; i < 6; i++) {
    const temp = Array(3).fill(null);
    if (cur[water1[i]] + cur[water2[i]] > limits[water1[i]]) {
      temp[water1[i]] = limits[water1[i]];
      temp[water2[i]] = cur[water1[i]] + cur[water2[i]] - limits[water1[i]];
    } else {
      temp[water1[i]] = cur[water1[i]] + cur[water2[i]];
      temp[water2[i]] = 0;
    }

    for (let j = 0; j < 3; j++) {
      if (temp[j] === null) {
        temp[j] = cur[j];
        break;
      }
    }

    if (!visited[temp[0]][temp[1]][temp[2]]) {
      visited[temp[0]][temp[1]][temp[2]] = true;
      queue.push([...temp]);
    }
  }
}
console.log(answer.sort((a, b) => a - b).join(' '));
