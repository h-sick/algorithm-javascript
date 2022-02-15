const getInfos = info => {
  const infos = {};
  info.forEach(_infoData => {
    const infoData = _infoData.split(' ');
    const score = +infoData.pop();
    const key = infoData.join('');
    if (infos[key]) {
      infos[key].push(score);
      return;
    }
    infos[key] = [score];
  });
  for (const key in infos) {
    infos[key].sort((a, b) => a - b);
  }
  return infos;
};

const getQueries = query =>
  query.map(_query => _query.split(/\sand\s|\s|\-/g).filter(Boolean));

const binarySearch = (info, score) => {
  let left = 0;
  let right = info.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (info[mid] < score) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return Math.floor((left + right) / 2) + 1;
};

const getMatchCount = (query, infos) => {
  const score = +query.pop();
  const keys = Object.keys(infos);

  return keys
    .filter(key => query.every(value => key.includes(value)))
    .reduce(
      (sum, key) => sum + infos[key].length - binarySearch(infos[key], score),
      0
    );
};

function solution(info, query) {
  const infos = getInfos(info);
  const queries = getQueries(query);
  return queries.map(_query => getMatchCount(_query, infos));
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
); // [1,1,1,1,2,4]
