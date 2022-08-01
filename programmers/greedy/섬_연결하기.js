function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  let answer = 0;
  const visited = Array(n).fill(false);
  const [from, to, cost] = costs[0];
  visited[from] = true;
  visited[to] = true;
  answer += cost;

  let bridgeCount = 1;
  const bridges = Array(costs.length).fill(false);
  bridges[0] = true;

  for (let i = 1; i < costs.length; i++) {
    if (bridgeCount === n - 1) return answer;
    if (bridges[i]) continue;

    const [from, to, cost] = costs[i];
    if ((visited[from] && visited[to]) || (!visited[from] && !visited[to])) {
      continue;
    }

    bridgeCount += 1;
    visited[from] = true;
    visited[to] = true;
    bridges[i] = true;
    answer += cost;
    i = 0;
  }
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
); // 4
