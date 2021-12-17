function solution(s) {
  const stripedString = s.slice(1, s.length - 1);
  const numbers = {};
  const isNumber = (char) => /\d/.test(char);

  let temp = '';
  for (const char of stripedString) {
    if (isNumber(char)) temp += char;
    if (!isNumber(char) && temp) {
      numbers[temp] = (numbers[temp] || 0) + 1;
      temp = '';
    }
  }
  return Object.entries(numbers)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => +key);
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{123}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
