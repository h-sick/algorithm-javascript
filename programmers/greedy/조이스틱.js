function solution(name) {
  const arr = [0];
  let answer = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === 'A') {
      if (i === 0) arr.push(countA(name) - 1);
      else if (name[i - 1] !== 'A') {
        arr.push(countA(name.slice(i)) - (i - 1));
      }
      answer += 1;
    } else answer += upDownCount(name[i]) + 1;
  }
  return answer - Math.max(...arr) - 1;
}

const upDownCount = char => {
  const alpabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alpabet.indexOf(char) < 13
    ? alpabet.indexOf(char)
    : 26 - alpabet.indexOf(char);
};

const countA = name => {
  let count = 0;
  for (const char of name) {
    if (char !== 'A') break;
    count += 1;
  }
  return count;
};

console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23
