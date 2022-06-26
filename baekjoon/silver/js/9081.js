// 단어 맞추기

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

const t = +inputs[0];
const words = inputs.slice(1, t + 1).map(input => input.trim());

const countCharacters = characters => {
  const counts = {};
  characters.forEach(character => {
    counts[character] = (counts[character] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => (a[0] > b[0] ? 1 : -1));
};

const getNextWord = (front, back) => {
  const characters = back.split('');
  const charCounts = countCharacters(characters);

  const firstCharIndex = charCounts.findIndex(([char]) => char === back[0]);
  let nextWord = front + charCounts[firstCharIndex + 1][0];
  charCounts[firstCharIndex + 1][1] -= 1;

  for (let [char, count] of charCounts) {
    while (count) {
      nextWord += char;
      count--;
    }
  }
  return nextWord;
};

for (const word of words) {
  let nextWord = null;
  for (let i = word.length - 1; i > 0; i--) {
    if (word[i - 1] < word[i]) {
      nextWord = getNextWord(word.slice(0, i - 1), word.slice(i - 1));
      break;
    }
  }
  console.log(nextWord || word);
}
