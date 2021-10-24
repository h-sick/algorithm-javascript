// 31[a2[c]]
// var decodeString = function (s) {
//   let multipleCounts = [];
//   let multipleCount = '';
//   let stack = [];

//   let answer = '';
//   for (let char of s) {
//     if (!isNaN(char)) {
//       multipleCount += char;
//     } else if (char === '[') {
//       multipleCounts.push(multipleCount);
//       multipleCount = '';
//       stack.push(answer);
//       answer = '';
//     } else if (char === ']') {
//       answer = stack.pop() + answer.repeat(multipleCounts.pop());
//     } else {
//       answer += char;
//     }
//   }
//   return answer;
// };

var decodeString = function (s) {
  let multipleCounts = [];
  let multipleCount = '';
  let stack = [];
  let strings = '';

  for (let char of s) {
    if (!isNaN(char)) {
      multipleCount += char;
    } else if (char === '[') {
      multipleCounts.push(multipleCount);
      multipleCount = '';
      stack.push(strings);
      strings = '';
    } else if (char === ']') {
      strings = stack.pop() + strings.repeat(multipleCounts.pop());
    } else {
      strings += char;
    }
  }
  return strings;
};

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('abc3[cd]xyz'));
