// 노드의 갯수가 300이 넘으면 플로이드 와샬로 해결 못함
// function solution(n, edge) {
//   const dp = Array.from({ length: n + 1 }, () =>
//     Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
//   );

//   for (let i = 1; i <= n; i++) dp[i][i] = 0;
//   for (const [from, to] of edge) {
//     dp[from][to] = 1;
//     dp[to][from] = 1;
//   }

//   for (let k = 1; k <= n; k++) {
//     for (let i = 1; i <= n; i++) {
//       for (let j = 1; j <= n; j++) {
//         if (dp[i][j] > dp[i][k] + dp[k][j]) dp[i][j] = dp[i][k] + dp[k][j];
//       }
//     }
//   }

//   const max = Math.max(...dp[1].slice(1));
//   return dp[1].filter(num => num === max).length;
// }

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // 3

function solution(n, edge) {
  const visited = Array(n + 1).fill(0);
  const dists = Array(n + 1).fill(0);
  visited[1] = 1;

  const queue = [1];
  while (queue.length) {
    const head = queue.shift();
    const dist = dists[head] + 1;

    for (const [from, to] of edge) {
      if (from === head && !visited[to]) {
        visited[to] = 1;
        dists[to] = dist;
        queue.push(to);
      }
      if (to === head && !visited[from]) {
        visited[from] = 1;
        dists[from] = dist;
        queue.push(from);
      }
    }
  }
  const longest = Math.max(...dists);
  return dists.filter(dist => dist === longest).length;
}
