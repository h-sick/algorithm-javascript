function solution(lottos, win_nums) {
  let zero = 0;
  let match = 0;
  for (const lotto of lottos) {
    if (lotto) {
      if (win_nums.includes(lotto)) match += 1;
      continue;
    }
    zero += 1;
  }

  const min = match ? 7 - match : 6;
  const max = 6 - match > zero ? min - zero : min - (6 - match);
  return [zero === 6 ? max + 1 : max, min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3,5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1,6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1,1]
