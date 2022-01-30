var countSubstrings = function (s) {
  const dp = Array.from({ length: s.length }, () => Array(s.length).fill(0));

  for (let i = 0; i < s.length; i++) dp[i][i] = 1;

  let count = s.length;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j + i < s.length; j++) {
      if (s[j] !== s[j + i]) continue;
      if (i <= 2 || dp[j + 1][j + i - 1]) {
        dp[j][j + i] = 1;
        count++;
      }
    }
  }
  return count;
};

console.log(countSubstrings('abc')); // 3
console.log(countSubstrings('aaa')); // 6
console.log(countSubstrings('ababa')); // 9
console.log(countSubstrings('fdsklf')); // 6
console.log(countSubstrings('leetcode')); // 9
console.log(countSubstrings('longtimenosee')); //14
