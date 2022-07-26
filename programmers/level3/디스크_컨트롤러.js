function solution(jobs) {
  let answer = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let time = 0;
  const queue = [];

  while (i < jobs.length || queue.length) {
    if (i < jobs.length && jobs[i][0] <= time) {
      queue.push(jobs[i++]);
      queue.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (queue.length) {
      const [request, take] = queue.shift();
      time += take;
      answer += time - request;
    } else time = jobs[i][0];
  }
  return Math.floor(answer / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
); // 9
