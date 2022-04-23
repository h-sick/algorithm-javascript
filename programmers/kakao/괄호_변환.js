const isBalanced = strings => {
  const count = {
    '(': 0,
    ')': 0,
  };
  for (const string of strings) {
    count[string] += 1;
  }
  return count['('] === count[')'];
};

const isRight = strings => {
  const array = [];
  for (const string of strings) {
    if (string === '(') {
      array.push('(');
    } else {
      if (array[array.length - 1] === '(') array.pop();
      else return false;
    }
  }
  return array.length === 0 ? true : false;
};

function solution(p) {
  if (p === '') return '';
  if (isRight(p)) return p;

  const convertToRight = strings => {
    if (strings === '') return '';

    for (let i = 0; i < strings.length - 1; i += 2) {
      const u = strings.slice(0, i + 2);
      const v = strings.slice(i + 2);
      if (!isBalanced(u) || !isBalanced(v)) continue;

      const convertedV = convertToRight(v);

      if (isRight(u)) {
        return u + convertedV;
      } else {
        const slicedU = u.slice(1, u.length - 1);

        let result = '';
        for (const char of slicedU) {
          if (char === '(') result += ')';
          if (char === ')') result += '(';
        }
        return `(${convertedV})${result}`;
      }
    }
  };
  return convertToRight(p);
}

console.log(solution('(()())()'));
console.log(solution(')('));
console.log(solution('()))((()'));
