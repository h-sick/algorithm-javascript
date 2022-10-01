function solution(s) {
  const isPalindrome = (s) => {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      if (isPalindrome(s.slice(j, i + j))) {
        return i;
      }
    }
  }
  return 1;
}

console.log(solution("abcdcba")); // 7
console.log(solution("abacde")); // 3
