function solution(dartResult) {
  const match = dartResult.match(/(\d{1,2}[SDT][*#]?)/g);

  const bonusPoints = {
    S: 1,
    D: 2,
    T: 3,
  };

  const scores = [];
  match.forEach((dart, i) => {
    const score = parseInt(dart);
    const bonus = score < 10 ? dart[1] : dart[2];

    let option = null;
    if (dart.length >= 3) {
      option = score < 10 ? dart[2] : dart[3];
    }

    scores.push(Math.pow(score, bonusPoints[bonus]));
    if (option) {
      if (option === '*') scores[i] *= 2;
      if (option === '#') scores[i] *= -1;

      if (i > 0) {
        if (option === '*') scores[i - 1] *= 2;
      }
    }
  });

  return scores.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
