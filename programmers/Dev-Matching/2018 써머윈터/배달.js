function solution(N, road, K) {
  const costs = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  costs[1] = 0;

  const graph = Array.from(Array(N + 1), () => Array());

  for (const [from, to, cost] of road) {
    graph[from].push([to, cost]);
    graph[to].push([from, cost]);
  }

  const queue = [[1, 0]];
  while (queue.length) {
    const [to] = queue.shift();

    for (const [next, cost] of graph[to]) {
      if (costs[next] > costs[to] + cost) {
        costs[next] = costs[to] + cost;
        queue.push([next, cost]);
      }
    }
  }
  return costs.reduce((acc, cur) => (cur <= K ? acc + 1 : acc), 0);
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4
