// 후위 표기식

const strings = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/1918.txt')
  .toString()
  .split('\n')[0]
  .trim();

let stack = [];
let answer = '';

const isAlphabet = (str) => /[a-zA-Z]/.test(str);
const isLastOfStack = (str) => stack[stack.length - 1] === str;

for (let char of strings) {
  if (isAlphabet(char)) answer += char;
  if (char === '(') stack.push(char);
  if (char === ')') {
    while (stack.length && !isLastOfStack('(')) answer += stack.pop();
    stack.pop();
  }
  if (char === '+' || char === '-') {
    while (stack.length && !isLastOfStack('(')) answer += stack.pop();
    stack.push(char);
  }
  if (char === '*' || char === '/') {
    while (stack.length && (isLastOfStack('*') || isLastOfStack('/')))
      answer += stack.pop();
    stack.push(char);
  }
}

while (stack.length) answer += stack.pop();
console.log(answer);

// 통과 못판 풀이법
// 괄호에 대한 고려를 잘 못함
// const isAlphabet = (char) => /[a-zA-Z]/.test(char);
// const isMultiple = (char) => /[\*\/]/.test(char);
// const isPlus = (char) => /[\+\-]/.test(char);
// const isSign = (char) => /[\+\-\*\/]/.test(char);

// let signs = [];
// let answer = '';
// let isGroup = 0;

// for (let i = 0; i < strings.length; i++) {
//   const [char, next] = [strings[i], strings[i + 1]];
//   if (isAlphabet(char)) {
//     answer += char;
//     if (!isGroup) {
//       if (isPlus(signs[signs.length - 1]) && isPlus(next)) answer += signs.pop();
//       if (isMultiple(signs[signs.length - 1])) {
//         while (signs.length) {
//           answer += signs.pop();
//           if (isMultiple(next)) break;
//         }
//       }
//     }
//   }
//   if (isSign(char)) signs.push(char);
//   if (char === '(') {
//     isGroup++;
//     signs.push(char);
//   }
//   if (char === ')') {
//     while (signs.length) {
//       if (signs[signs.length - 1] === '(') {
//         while (signs[signs.length - 1] === '(') {
//           signs.pop();
//         }
//         answer += signs.pop();
//         break;
//       }
//       answer += signs.pop();
//     }
//     isGroup--;
//   }
// }
// while (signs.length) {
//   answer += signs.pop();
// }
// console.log(answer);
