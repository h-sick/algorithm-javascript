function solution(s) {
  const stack = [];
  for (const char of s) {
    if (char === '(') stack.push(char);
    if (char === ')') {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === '(') stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false
