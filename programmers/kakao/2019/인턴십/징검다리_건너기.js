function solution(stones, k) {
  const canPass = count => {
    let drowned = 0;
    for (const stone of stones) {
      if (stone - count <= 0) drowned += 1;
      else drowned = 0;
      if (drowned === k) return false;
    }
    return true;
  };

  let left = 1;
  let right = 200000000;

  let result = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canPass(mid)) {
      result = mid + 1;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
