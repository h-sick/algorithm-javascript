// 공통 부분 문자열

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/5582.txt')
  .toString()
  .trim()
  .split('\n');

const firstString = inputs[0].trim();
const secondString = inputs[1].trim();

let longest = 0;
const characterCheck = Array.from({ length: firstString.length + 1 }, () =>
  Array(secondString.length + 1).fill(0)
);
for (let i = 1; i <= firstString.length; i++) {
  for (let j = 1; j <= secondString.length; j++) {
    if (firstString[i - 1] === secondString[j - 1]) {
      characterCheck[i][j] = characterCheck[i - 1][j - 1] + 1;
      if (characterCheck[i][j] > longest) longest = characterCheck[i][j];
    }
  }
}
console.log(longest);
