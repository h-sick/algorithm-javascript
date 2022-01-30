// 안정적인 문자열

const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/4889.txt')
  .toString()
  .split('\n');

const strings = [];

let index = 0;
while (!inputs[index].includes('-')) {
  strings[index] = inputs[index].trim();
  index++;
}

strings.forEach((string, index) => {
  const stack = [];
  for (const char of string) {
    if (char === '{') {
      stack.push('{');
    } else {
      if (stack.length && stack[stack.length - 1] === '{') stack.pop();
      else stack.push('}');
    }
  }

  let count = 0;
  for (let i = stack.length - 1; i >= 0; i -= 2) {
    if (stack[i - 1] === stack[i]) count += 1;
    else count += 2;
  }
  console.log(`${index + 1}. ${count}`);
});
