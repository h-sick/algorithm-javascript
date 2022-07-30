function solution(n, wires) {
  const graph = Array.from(Array(n + 1), () => []);
  wires.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const countLinkedNodes = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = Array(n + 1).fill(false);
    visited[root] = true;

    while (queue.length) {
      const from = queue.pop();
      graph[from].forEach(next => {
        if (next !== exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
      count += 1;
    }
    return count;
  };

  let answer = 100;
  wires.map(([from, to]) => {
    const diff = Math.abs(
      countLinkedNodes(from, to) - countLinkedNodes(to, from)
    );
    answer = Math.min(answer, diff);
  });
  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 3
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // 0
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
); // 1
