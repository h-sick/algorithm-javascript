function solution(numbers, target) {
  let count = 0;

  const dfs = (sum, level, temp) => {
    if (level === numbers.length) {
      if (sum === target) count += 1;
      return;
    }

    dfs(sum + numbers[level], level + 1, temp + numbers[level]);
    dfs(sum - numbers[level], level + 1, `${temp}-${numbers[level]}`);
  };
  dfs(0, 0, '');
  return count;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
