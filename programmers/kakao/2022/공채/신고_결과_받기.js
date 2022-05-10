function solution(id_list, report, k) {
  const idLength = id_list.length;

  const nameIndex = {};
  for (let i = 0; i < idLength; i++) {
    nameIndex[id_list[i]] = i;
  }

  const reports = Array.from({ length: idLength }, () =>
    Array(idLength).fill(0)
  );
  for (const names of report) {
    const [from, to] = names.split(' ');
    reports[nameIndex[from]][nameIndex[to]] = 1;
  }

  const result = Array(idLength).fill(0);
  for (let i = 0; i < idLength; i++) {
    let count = 0;
    for (let j = 0; j < idLength; j++) {
      count += reports[j][i];
    }

    if (count < k) continue;
    for (let j = 0; j < idLength; j++) {
      if (reports[j][i]) result[j] += 1;
    }
  }
  return result;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2,1,1,0]
console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
); // [0,0]
