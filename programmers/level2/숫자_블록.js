function solution(begin, end) {
  return Array.from({ length: end + 1 - begin }, (_, i) => {
    const block = begin + i;
    if (block === 1) {
      return 0;
    }

    for (let j = 2; j <= Math.sqrt(block); j++) {
      if (block % j === 0 && block / j <= 1e7) {
        return block / j;
      }
    }
    return 1;
  });
}

console.log(solution(1, 10)); // [0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
