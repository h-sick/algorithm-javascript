console.log(solution([93, 30, 55], [1, 30, 5])); // [2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //	[1, 3, 2]

function solution(progresses, speeds) {
  let answer = [];
  let queue = [...progresses];

  let count = 0,
    day = 1;
  while (queue.length) {
    const progress = queue[0] + speeds[0] * day;
    if (progress >= 100) {
      queue.shift();
      speeds.shift();
      count++;
      if (queue.length === 0) answer.push(count);
      continue;
    }
    if (count) answer.push(count);
    day++;
    count = 0;
  }
  return answer;
}
