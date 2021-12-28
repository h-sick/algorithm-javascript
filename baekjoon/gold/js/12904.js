// A와 B

const inputs = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : '../text/12904.txt'
  )
  .toString()
  .split('\n');

const [s, t] = inputs.map(input => input.trim());

let temp = t;
while (temp !== s) {
  if (temp.length === s.length) break;

  const last = temp[temp.length - 1];
  temp = temp.substring(0, temp.length - 1);
  if (last === 'B') temp = temp.split('').reverse().join('');
}
console.log(temp === s ? 1 : 0);

// const [s, t] = inputs.map(input => input.trim().split(''));

// function isSameArray(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//     else continue;
//   }
//   return true;
// }

// const getABCount = temp => {
//   const count = {};
//   for (const char of temp) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   return [count['A'], count['B']];
// };
// const [tA, tB] = getABCount(t);

// const isAnyCharHasMoreThanT = temp => {
//   const [tempA, tempB] = getABCount(temp);
//   if (tempA > tA || tempB > tB) return true;
//   return false;
// };

// let isPossibleToChange = 0;
// const dfs = temp => {
//   if (isAnyCharHasMoreThanT(temp) || isPossibleToChange) return;

//   if (isSameArray(temp, t)) {
//     isPossibleToChange = 1;
//     return;
//   }

//   if (temp.length === t.length) return;

//   dfs([...temp, 'A']);
//   dfs([...temp.reverse(), 'B']);
// };
// dfs(s);
// console.log(isPossibleToChange);
