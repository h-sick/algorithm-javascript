// 팰린드롬 만들기

const s = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1254.txt')
  .toString()
  .split('\n')[0]
  .trim();

const isPalindrom = string => string.split('').reverse().join('') === string;

const getShortestPalindrom = () => {
  if (isPalindrom(s)) return s.length;

  let string = s;
  for (let i = 0; i < s.length - 1; i++) {
    string =
      s +
      s
        .slice(0, i + 1)
        .split('')
        .reverse()
        .join('');
    if (isPalindrom(string)) return string.length;
  }
};
console.log(getShortestPalindrom());
