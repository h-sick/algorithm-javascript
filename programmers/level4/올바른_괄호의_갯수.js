function solution(n) {
  let count = 0;

  const dfs = (open, close) => {
    if (open + close === n * 2) {
      if (open === n && close === n) {
        count += 1;
      }
      return;
    }

    if (open > close) {
      dfs(open, close + 1);
    }
    dfs(open + 1, close);
  };
  dfs(0, 0);

  return count;
}

console.log(solution(2)); // 2
console.log(solution(3)); // 5
