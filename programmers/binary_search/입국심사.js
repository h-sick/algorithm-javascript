function solution(n, times) {
  times.sort((a, b) => a - b);

  let [min] = times;
  let max = times[times.length - 1] * n;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    let pass = 0;
    for (const time of times) {
      pass += Math.floor(mid / time);
      if (pass >= n) {
        break;
      }
    }

    if (pass >= n) max = mid - 1;
    else min = mid + 1;
  }
  return min;
}

console.log(solution(6, [7, 10])); // 28
