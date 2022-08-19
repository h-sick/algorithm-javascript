function solution(distance, rocks, n) {
  const sortedRocks = [0, ...rocks, distance].sort((a, b) => a - b);

  let left = 0;
  let right = sortedRocks[sortedRocks.length - 1];
  while (left <= right) {
    let count = 0;
    let curretnRock = 0;

    const mid = Math.floor((left + right) / 2);
    for (let i = 1; i < sortedRocks.length; i++) {
      if (sortedRocks[i] - curretnRock < mid) count += 1;
      else curretnRock = sortedRocks[i];
    }

    if (count > n) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 4
