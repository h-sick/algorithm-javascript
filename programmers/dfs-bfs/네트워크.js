function solution(n, computers) {
  const visited = Array(n).fill(false);

  const visitNodes = (start) => {
    visited[start] = true;
    visited.forEach((_, next) => {
      if (computers[start][next] && !visited[next]) {
        visitNodes(next);
      }
    });
  };

  let count = 0;
  visited.forEach((_, index) => {
    if (!visited[index]) {
      visitNodes(index);
      count += 1;
    }
  });
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
