function solution(n, words) {
  const usedWord = new Set();
  usedWord.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const lastWord = words[i - 1];
    const wrongWord = lastWord[lastWord.length - 1] !== words[i][0];
    const useSameWord = usedWord.has(words[i]);
    if (wrongWord || useSameWord) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    usedWord.add(words[i]);
  }
  return [0, 0];
}

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
); // [3,3]
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0,0]
console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
); // [1,3]
