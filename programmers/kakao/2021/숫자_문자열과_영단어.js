function solution(s) {
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let word = '';
  let result = '';
  for (const char of s) {
    if (!isNaN(char)) {
      result += char;
      continue;
    }

    word += char;
    if (nums[word] !== undefined) {
      result += nums[word];
      word = '';
    }
  }
  return +result;
}

console.log(solution('one4seveneight')); // 1478
console.log(solution('23four5six7')); // 234567
console.log(solution('2three45sixseven')); // 234567
console.log(solution('123')); // 123
