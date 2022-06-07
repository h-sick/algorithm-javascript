function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const isDiffOneWord = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        count += 1;
        if (count > 1) return false;
      }
    }
    if (count === 1) return true;
    return false;
  };

  const visited = new Set();
  const queue = [[begin, 0]];

  while (queue.length) {
    const [current, count] = queue.shift();
    if (current === target) {
      return count;
    }

    for (const word of words) {
      if (visited.has(word)) continue;
      if (isDiffOneWord(current, word)) {
        queue.push([word, count + 1]);
        visited.add(word);
      }
    }
  }
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
