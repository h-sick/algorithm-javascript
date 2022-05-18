function solution(p) {
  const isRight = string => {
    let temp = [];
    for (const char of string) {
      if (char === '(') temp.push(char);
      if (char === ')') temp.pop();
    }
    return !Boolean(temp.length);
  };

  if (isRight(p)) {
    return p;
  }

  const isBalanced = string => {
    let [left, right] = [0, 0];
    for (const char of string) {
      if (char === '(') left += 1;
      if (char === ')') right += 1;
    }
    return left === right;
  };

  const makeRight = string => {
    if (!string) {
      return string;
    }

    for (let i = 0; i < string.length; i += 2) {
      const [u, v] = [string.slice(0, i + 2), string.slice(i + 2)];
      if (!isBalanced(u) || !isBalanced(v)) {
        continue;
      }

      if (isRight(u)) {
        return u + makeRight(v);
      }

      let turnOver = '';
      for (const char of u.slice(1, u.length - 1)) {
        if (char === '(') turnOver += ')';
        if (char === ')') turnOver += '(';
      }
      return `(${makeRight(v)})` + turnOver;
    }
  };
  return makeRight(p);
}

console.log(solution('(()())()')); // 	"(()())()"
console.log(solution(')(')); // "()"
console.log(solution('()))((()')); // 	"()(())()"
