function solution(lines) {
  const getMilliseconds = (time, take) => {
    let [h, m, s] = time.split(':');
    const milliSeconds = Number(s.split('.')[1]);
    s = s.split('.')[0];

    const endTime =
      +h * 60 * 60 * 1000 + +m * 60 * 1000 + +s * 1000 + milliSeconds;
    const startTime =
      endTime - Number(take.slice(0, take.length - 1) * 1000) + 1;
    return [startTime, endTime + 1000];
  };

  const logs = [];
  lines.forEach(line => {
    const [_, time, take] = line.split(' ');
    const [startTime, endTime] = getMilliseconds(time, take);
    logs.push(['start', startTime]);
    logs.push(['end', endTime]);
  });
  logs.sort((a, b) => a[1] - b[1]);

  let max = 0;
  let count = 0;
  logs.forEach(([type]) => {
    if (type === 'start') count += 1;
    if (type === 'end') count -= 1;
    max = Math.max(max, count);
  });
  return max;
}

console.log(
  solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'])
); // 1
console.log(
  solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'])
); // 2
console.log(
  solution([
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s',
  ])
); // 7
