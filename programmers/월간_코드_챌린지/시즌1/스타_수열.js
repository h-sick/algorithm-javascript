function solution(a) {
  const counts = a.reduce((obj, num) => {
    obj[num] ? obj[num]++ : (obj[num] = 1);
    return obj;
  }, {});
  const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  let answer = 0;
  for (let i = 0; i < sortedCounts.length; i++) {
    if (answer >= sortedCounts[i][1]) break;

    let count = 0;
    for (let j = 1; j < a.length; j++) {
      if (a[j - 1] === a[j]) continue;
      if (a[j - 1] !== +sortedCounts[i][0] && a[j] !== +sortedCounts[i][0])
        continue;

      count++;
      j++;
    }
    answer = Math.max(answer, count);
  }
  return answer * 2;
}

console.log(solution([0])); // 0
console.log(solution([5, 2, 3, 3, 5, 3])); // 4
console.log(solution([0, 3, 3, 0, 7, 2, 0, 2, 2, 0])); // 8
