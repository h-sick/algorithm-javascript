function solution(elements) {
  const len = elements.length;
  const set = new Set();

  const newElements = [...elements, ...elements];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = newElements
        .slice(j, i + j + 1)
        .reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
