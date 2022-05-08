function solution(s) {
  const string = s.slice(1, s.length - 1);
  const numbers = {};
  const isNumber = char => !isNaN(char);

  let num = '';
  for (const char of string) {
    if (isNumber(char)) {
      num += char;
      continue;
    }
    if (num) {
      numbers[num] = (numbers[num] || 0) + 1;
      num = '';
    }
  }

  return Object.entries(numbers)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => +key);
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
console.log(solution('{{20,111},{111}}')); // [111, 20]
console.log(solution('{{123}}')); // [123]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')); // [3, 2, 4, 1]
