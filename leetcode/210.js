var findOrder = function (numCourses, prerequisites) {
  let graph = Array.from({ length: numCourses }, () => Array());
  let indegrees = Array(numCourses).fill(0);

  prerequisites.forEach(([to, from]) => {
    graph[from].push(to);
    indegrees[to]++;
  });

  let queue = [];
  indegrees.forEach((num, i) => {
    if (num === 0) queue.push(i);
  });

  let count = 0;
  let answer = [];
  while (queue.length) {
    const from = queue.shift();
    answer.push(from);
    count++;

    graph[from].forEach((to) => {
      indegrees[to]--;
      if (indegrees[to] === 0) queue.push(to);
    });
  }
  if (count !== numCourses) return [];
  return answer;
};

console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
console.log(findOrder(1, []));
