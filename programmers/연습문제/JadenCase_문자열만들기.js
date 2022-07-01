function solution(s) {
  let dist = 1;
  const sentence = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (sentence[i] === ' ') {
      dist = 1;
      continue;
    }
    if (dist === 1) sentence[i] = sentence[i].toUpperCase();
    else sentence[i] = sentence[i].toLowerCase();
    dist++;
  }
  return sentence.join('');
}

console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
console.log(solution('for the last week')); // "For The Last Week"
