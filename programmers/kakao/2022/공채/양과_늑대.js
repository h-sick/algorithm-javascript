function solution(info, edges) {
  const graph = Array.from({ length: info.length }, () => []);
  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
  }

  let max = 0;
  const dfs = (node, sheep, wolf, routes) => {
    if (sheep === wolf) {
      return;
    }
    max = Math.max(max, sheep);

    const newRoutes = [...routes, ...graph[node]];
    const nodeIndex = routes.indexOf(node);
    newRoutes.splice(nodeIndex, 1);

    for (const nextNode of newRoutes) {
      if (info[nextNode] === 0) dfs(nextNode, sheep + 1, wolf, newRoutes);
      if (info[nextNode] === 1) dfs(nextNode, sheep, wolf + 1, newRoutes);
    }
  };
  dfs(0, 1, 0, [0]);
  return max;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
); // 5
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
); // 5
