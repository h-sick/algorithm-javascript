const getCombination = (columnLength, num) => {
  const combinations = [];
  let temp = [];

  const recursion = (level, start) => {
    if (level === num) return combinations.push(temp.join(''));
    for (let i = start; i < columnLength; i++) {
      temp.push(i);
      recursion(level + 1, i + 1);
      temp.pop();
    }
  };
  recursion(0, 0);
  return combinations;
};

const isEqualCombi = (arr1, arr2) => arr1.join('') === arr2.join('');

function solution(relation) {
  const { length: columnLength } = relation[0];

  let combinations = [];
  for (let i = columnLength; i >= 1; i--) {
    const combination = getCombination(columnLength, i);
    combinations.push(...combination);
  }

  let answer = 0;
  while (combinations.length > 0) {
    const indexes = combinations.pop().split('').map(Number);
    const hasEqualCombi = relation
      .map(row => row.filter((_, i) => indexes.includes(i)))
      .some(
        (row, i, _relation) =>
          i !== _relation.findIndex(_row => isEqualCombi(_row, row))
      );

    if (!hasEqualCombi) {
      answer += 1;
      combinations = combinations.filter(
        combination => !indexes.every(index => combination.includes(index))
      );
    }
  }
  return answer;
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
); // 2
