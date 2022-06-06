function solution(n, computers) {
  const visited = Array(n).fill(0);

  const visitNodes = from => {
    visited[from] = 1;
    for (let to = 0; to < n; to++) {
      if (computers[from][to] === 1 && !visited[to]) {
        visitNodes(to);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visitNodes(i);
      count += 1;
    }
  }
  return count;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
