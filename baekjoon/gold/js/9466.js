//  텀 프로젝트

// 인접 리스트
const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/9466.txt')
  .toString()
  .split('\n');

let t = +inputs[0];
for (let index = 0; index < t; index++) {
  let n = +inputs[index * 2 + 1];
  let students = inputs[index * 2 + 2].split(' ').map(Number);

  let graph = Array.from({ length: n + 1 }, () => Array());
  for (let i = 0; i < n; i++) {
    graph[i + 1].push(students[i]);
  }

  let checked = Array(n + 1).fill(0);
  let team = 0;
  function dfs(start, num, count) {
    for (let i = 0; i < graph[num].length; i++) {
      const next = graph[num][i];
      if (next === num) {
        team++;
        checked[next] = 1;
        return;
      }
      if (start === next) {
        team += count + 1;
        checked[next] = 1;
        return;
      }
      if (checked[next] === 0) dfs(start, next, count + 1);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (checked[i] === 1) continue;
    const nexts = graph[i];
    for (let j = 0; j < nexts.length; j++) {
      if (checked[nexts[j]] === 0) {
        if (nexts[j] === i) {
          team++;
          checked[i] = 1;
          continue;
        }
        checked[nexts[j]] = 1;
        dfs(i, nexts[j], 1);
      }
    }
  }
  console.log(n - team);
}
//   인접행렬
//    let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
//    for (let i = 0; i < n; i++) {
//      graph[i + 1][students[i]] = 1;
//    }

//    let team = 0;
//    function dfs(start, num, count) {
//      for (let i = 1; i <= n; i++) {
//        if (num === i && graph[num][i] === 1) {
//          team++;
//          graph[i][i] = 0;
//          return;
//        }
//        if (graph[num][i] === 1) {
//          graph[num][i] = 0;
//          if (start === num) {
//            team += count + 1;
//            return;
//          }
//          dfs(start, i, count + 1);
//        }
//      }
//    }

//    for (let i = 1; i <= n; i++) {
//      if (graph[i][i] === 1) {
//        graph[i][i] = 0;
//        team++;
//        continue;
//      }
//      for (let j = 1; j <= n; j++) {
//        if (graph[i][j] === 1) {
//          graph[i][j] = 0;
//          dfs(i, j, 1);
//        }
//      }
//    }
//    console.log(n - team);
// }
