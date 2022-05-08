function solution(gems) {
  const min = [1, gems.length];

  const size = new Set(gems).size;

  const map = new Map();
  let left = 1;
  for (let right = 1; right <= gems.length; right++) {
    map.set(gems[right - 1], (map.get(gems[right - 1]) || 0) + 1);
    while (size === map.size && left <= right) {
      if (min[1] - min[0] > right - left) {
        min[1] = right;
        min[0] = left;
      }
      if (map.get(gems[left - 1]) > 1)
        map.set(gems[left - 1], map.get(gems[left - 1]) - 1);
      else map.delete(gems[left - 1]);
      left++;
    }
  }
  return min;
}

console.log(
  solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA'])
); // [3,7]
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC'])); // [1, 3]
console.log(solution(['XYZ', 'XYZ', 'XYZ'])); // [1, 1]
console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])); // 	[1, 5]
