// 좋은 수열

const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2661.txt')
  .toString()
  .trim()
  .split('\n')[0];

const getGoodProgression = (n) => {
  const progression = [];
  const isGoodProgression = (length) => {
    for (let i = 1; i <= length; i++) {
      let isSameNumber = true;
      for (let j = progression.length - 1; j >= progression.length - i; j--) {
        if (progression[j - i] !== progression[j]) {
          isSameNumber = false;
          break;
        }
      }
      if (isSameNumber) return false;
    }
    return true;
  };

  let found = false;
  const backTrack = (length) => {
    if (found) return;
    if (length === n + 1) {
      found = true;
      return;
    }
    for (const num of [1, 2, 3]) {
      progression.push(num);
      if (isGoodProgression(parseInt(length / 2))) backTrack(length + 1);
      if (found) return;
      progression.pop();
    }
  };
  backTrack(1);
  return progression.join('');
};
console.log(getGoodProgression(n));
