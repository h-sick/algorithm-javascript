/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const { length } = digits;
  const output = [];
  const recursive = (level, temp) => {
    if (level === length) {
      output.push(temp);
      return;
    }

    const keys = phone[digits[level]];
    for (const key of keys) {
      recursive(level + 1, temp + key);
    }
  };
  recursive(0, '');
  return output;
};

console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')); // []
console.log(letterCombinations('2')); // ["a","b","c"]
