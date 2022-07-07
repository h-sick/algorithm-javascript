function solution(s) {
  const isRight = (string, isBeforeRight) => {
    if (isBeforeRight) {
      return false;
    }

    const arr = [];
    for (const char of string) {
      if (char === ']' && arr[arr.length - 1] === '[') arr.pop();
      else if (char === ')' && arr[arr.length - 1] === '(') arr.pop();
      else if (char === '}' && arr[arr.length - 1] === '{') arr.pop();
      else arr.push(char);
    }
    return arr.length === 0;
  };

  let lastRight = false;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (isRight(s.substr(i, s.length - i) + s.substr(0, i), lastRight)) {
      count++;
      lastRight = true;
    } else lastRight = false;
  }
  return count;
}

console.log(solution('[](){}')); // 3
console.log(solution('}]()[{')); // 2
console.log(solution('[)(]')); // 0
console.log(solution('}}}')); // 0
