function solution(n, info) {
  let maxDiff = 0;
  let maxRecords = [];

  const dfs = (index, arrow, score, apeachScore, records) => {
    if (index > 10) {
      const scoreDiff = score - apeachScore;
      if (scoreDiff > maxDiff) {
        records[10] = arrow;
        maxDiff = scoreDiff;
        maxRecords = records;
      }
      return;
    }

    if (arrow >= info[10 - index] + 1) {
      const winRecords = [...records];
      winRecords[10 - index] = info[10 - index] + 1;
      dfs(
        index + 1,
        arrow - winRecords[10 - index],
        score + index,
        apeachScore,
        winRecords
      );
    }

    dfs(
      index + 1,
      arrow,
      score,
      info[10 - index] ? apeachScore + index : apeachScore,
      records
    );
  };
  dfs(0, n, 0, 0, Array(11).fill(0));

  if (maxDiff <= 0) return [-1];
  return maxRecords;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // [-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); // [1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); // [1,1,1,1,1,1,1,1,0,0,2]
