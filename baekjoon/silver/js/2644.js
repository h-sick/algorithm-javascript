// 촌수계산

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2644.txt')
  .toString()
  .split('\n');

let [n, m] = [+inputs[0], +inputs[2]];
let [a, b] = inputs[1].split(' ').map(Number);
let relatives = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 3; i < m + 3; i++) {
  const [parent, child] = inputs[i].split(' ').map(Number);
  relatives[child][parent] = 1;
  relatives[parent][child] = 1;
}

let checked = Array(n + 1).fill(0);
checked[a] = 1;

let found = false,
  answer;
function dfs(start, count) {
  if (found) return;
  for (let i = 1; i <= 100; i++) {
    if (relatives[start][i] === 1 && checked[i] === 0) {
      checked[i] = 1;
      if (i === b) {
        found = true;
        answer = count + 1;
        return;
      }
      dfs(i, count + 1);
    }
  }
  if (!answer) answer = -1;
}
dfs(a, 0);
console.log(answer);
