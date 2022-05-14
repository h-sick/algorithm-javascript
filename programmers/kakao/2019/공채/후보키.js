function solution(relation) {
  const columnCount = relation[0].length;

  const combinations = [];
  const dfs = (start, temp) => {
    if (temp) {
      combinations.push(temp);
    }

    if (start === columnCount) {
      return;
    }

    for (let i = start; i < columnCount; i++) {
      dfs(i + 1, temp + i);
    }
  };
  dfs(0, '');

  let uniqueKeys = [];
  for (const combination of combinations) {
    const indexes = combination.split('').map(Number);

    const set = new Set();
    for (const row of relation) {
      let temp = '';
      for (const index of indexes) {
        temp += row[index];
      }
      if (set.has(temp)) break;
      else set.add(temp);
    }

    if (set.size === relation.length) {
      uniqueKeys.push(combination);
    }
  }
  uniqueKeys.sort((a, b) => b.length - a.length);

  let count = 0;
  while (uniqueKeys.length) {
    const uniqueKeyArr = uniqueKeys.pop().split('').map(Number);

    uniqueKeys = uniqueKeys.filter(
      uniqueKey => !uniqueKeyArr.every(key => uniqueKey.includes(key))
    );
    count += 1;
  }
  return count;
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

// console.log(
//   solution([
//     ['a', 1, 'aaa', 'c', 'ng'],
//     ['b', 1, 'bbb', 'c', 'g'],
//     ['c', 1, 'aaa', 'd', 'ng'],
//     ['d', 2, 'bbb', 'd', 'ng'],
//   ])
// ); // 3
