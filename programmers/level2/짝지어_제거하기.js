function solution(s) {
  let strings = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (strings[strings.length - 1] === s[i]) {
      strings.pop();
      continue;
    }
    strings.push(s[i]);
  }
  return strings.length ? 0 : 1;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
