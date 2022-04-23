// 팰린드롬 만들기

const path = require('path');
const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux'
      ? 'dev/stdin'
      : path.join(
          __dirname,
          `../text/${path.basename(__filename).split('.')[0]}.txt`
        )
  )
  .toString()
  .trim()
  .split('\n');

const s = inputs[0].trim();

const isPalindrom = string => string.split('').reverse().join('') === string;

const getShortestPalindrom = () => {
  let temp = s.split('');
  if (isPalindrom(temp.join(''))) return temp.length;

  for (let i = 0; i < s.length - 1; i++) {
    if (i) {
      temp.splice(temp.length - i, 0, s[i]);
    } else temp.push(s[0]);
    if (isPalindrom(temp.join(''))) return temp.length;
  }
};

console.log(getShortestPalindrom());

// const s = require('fs')
//   .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1254.txt')
//   .toString()
//   .split('\n')[0]
//   .trim();

// const isPalindrom = string => string.split('').reverse().join('') === string;

// const getShortestPalindrom = () => {
//   if (isPalindrom(s)) return s.length;

//   let string = s;
//   for (let i = 0; i < s.length - 1; i++) {
//     string =
//       s +
//       s
//         .slice(0, i + 1)
//         .split('')
//         .reverse()
//         .join('');
//     if (isPalindrom(string)) return string.length;
//   }
// };
// console.log(getShortestPalindrom());
