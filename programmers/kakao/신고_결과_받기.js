function solution(id_list, report, k) {
  const total = id_list.length;
  const matches = {};
  id_list.forEach((id, i) => (matches[id] = i));

  const reports = Array.from({ length: total + 1 }, () => Array(total).fill(0));
  report.forEach(each => {
    const [from, to] = each.split(' ');
    reports[matches[from]][matches[to]] = 1;
  });

  for (let i = 0; i < total; i++) {
    for (let j = 0; j < total; j++) {
      reports[total][i] += reports[j][i];
    }
  }

  const result = Array(total).fill(0);
  for (let i = 0; i < total; i++) {
    let sum = 0;
    for (let j = 0; j < total; j++) {
      if (reports[i][j] && reports[total][j] >= k) sum += 1;
    }
    result[i] = sum;
  }
  return result;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2,
    [2, 1, 1, 0]
  )
);
console.log(
  solution(
    ['con', 'ryan'],
    ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
    3,
    [0, 0]
  )
);
