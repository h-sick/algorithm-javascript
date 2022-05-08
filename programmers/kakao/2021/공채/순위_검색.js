function solution(info, query) {
  const getInfos = () => {
    const infos = {};
    info.forEach(data => {
      const userInfo = data.split(' ');
      const score = +userInfo.pop();
      if (!infos[userInfo.join('')]) infos[userInfo.join('')] = [];
      infos[userInfo.join('')].push(score);
    });

    Object.keys(infos).forEach(key => {
      infos[key].sort((a, b) => a - b);
    });
    return infos;
  };

  const getQueries = () =>
    query.map(data => data.split(/\s|and|\-/g).filter(Boolean));

  const binarySearch = (scores, score) => {
    let left = 0;
    let right = scores.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (scores[mid] < score) left = mid + 1;
      else right = mid - 1;
    }
    return Math.floor((left + right) / 2) + 1;
  };

  const countMatchUser = (queryArray, infos) => {
    const score = +queryArray.pop();
    return Object.keys(infos)
      .filter(key => queryArray.every(keyword => key.includes(keyword)))
      .reduce(
        (count, key) =>
          count + infos[key].length - binarySearch(infos[key], score),
        0
      );
  };

  const infos = getInfos();
  const queries = getQueries();
  return queries.map(queryArray => countMatchUser(queryArray, infos));
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
