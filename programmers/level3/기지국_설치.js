function solution(n, stations, w) {
  let count = 0;
  let index = 0;
  let station = 1;

  while (station <= n) {
    if (station >= stations[index] - w && station <= stations[index] + w) {
      station = stations[index] + w;
      index += 1;
    } else {
      station += w * 2;
      count += 1;
    }
    station += 1;
  }
  return count;
}

console.log(solution(11, [4, 11], 1)); // 3
console.log(solution(16, [9], 2)); // 3
