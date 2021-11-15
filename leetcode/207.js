var canFinish = function (numCourses, prerequisites) {
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

  while (queue.length) {
    const from = queue.shift();
    graph[from].forEach((to) => {
      indegrees[to]--;
      if (indegrees[to] === 0) queue.push(to);
    });
  }

  for (let indegree of indegrees) {
    if (indegree > 0) return false;
  }
  return true;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
