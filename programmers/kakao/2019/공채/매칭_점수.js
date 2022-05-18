function solution(word, pages) {
  const scores = Array.from({ length: pages.length }, (_, index) => ({
    index,
    baseScore: 0,
    links: [],
    linkScore: 0,
    matchingScore: 0,
    url: '',
  }));

  for (let i = 0; i < pages.length; i++) {
    const matchedWords = pages[i].match(new RegExp(`(${word})+`, 'gi'));
    if (matchedWords) {
      scores[i].baseScore = matchedWords.filter(
        matched => matched.length === word.length
      ).length;
    }

    const matchedLinks = pages[i].match(/<a href="https:\/\/(.+?)"/g);
    if (matchedLinks) {
      scores[i].links = matchedLinks.map(link =>
        link.split('https://')[1].slice(0, -1)
      );
    }

    const [_, matchedUrl] = pages[i].match(
      /<meta property="og:url" content="https:\/\/(\S+)"/
    );
    if (matchedUrl) {
      scores[i].url = matchedUrl;
    }
  }

  for (let i = 0; i < pages.length; i++) {
    for (let j = 0; j < pages.length; j++) {
      if (i === j) continue;
      if (scores[j].links.includes(scores[i].url)) {
        scores[i].linkScore += scores[j].baseScore / scores[j].links.length;
      }
    }
    scores[i].matchingScore = scores[i].baseScore + scores[i].linkScore;
  }

  scores.sort((a, b) =>
    a.matchingScore === b.matchingScore
      ? a.index - b.index
      : b.matchingScore - a.matchingScore
  );
  return scores[0].index;
}

console.log(
  solution('blind', [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
  ])
); // 0

console.log(
  solution('Muzi', [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
  ])
); // 1

// function solution(word, pages) {
//   word = word.toLowerCase();
//   const REGEX_WORD = /[\d|\W]/;
//   const REGEX_URL = /<a href="https:\S*"/gi;
//   const META_URL = 'meta property';
//   const pageInfo = new Map();

//   pages.forEach((page, idx) => {
//     const pageArr = page.split('\n');
//     const urlIdx = pageArr.findIndex(el => el.includes(META_URL));
//     const pageURL = pageArr[urlIdx].match(/"https:\S*"/gi)[0];

//     const point = pageArr
//       .flatMap(str => str.toLowerCase().split(REGEX_WORD))
//       .filter(e => e === word).length;
//     const outLinks = pageArr
//       .flatMap(str => str.match(REGEX_URL))
//       .filter(e => e)
//       .map(e => e.substr(8, e.length));
//     console.log(point, outLinks);

//     pageInfo.set(pageURL, { point, outLinks, idx, matchPoint: 0 });
//   });

//   for (const [key, value] of pageInfo) {
//     const linkPoint = value.point / value.outLinks.length;

//     for (const link of value.outLinks) {
//       if (pageInfo.has(link)) {
//         const origin = pageInfo.get(link);
//         const calculatedPoint = origin.matchPoint
//           ? origin.matchPoint + linkPoint
//           : origin.point + linkPoint;
//         pageInfo.set(link, { ...origin, matchPoint: calculatedPoint });
//       }
//     }
//   }

//   const answer = [];

//   for (const [key, value] of pageInfo) {
//     const { point, idx, matchPoint } = value;
//     const finalPoint = matchPoint ? matchPoint : point;
//     answer.push([idx, finalPoint]);
//   }

//   answer.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

//   return answer[0][0];
// }
