function solution(msg) {
  const hash = new Map();
  for (let i = 1; i <= 26; i++) {
    hash.set(String.fromCharCode(i + 64), i);
  }

  const answer = [];
  let temp = '';
  for (let i = 0; i < msg.length; i++) {
    while (hash.has(temp + msg[i])) {
      temp += msg[i];
      i += 1;
    }
    hash.set(temp + msg[i], hash.size + 1);

    answer.push(hash.get(temp));
    temp = '';
    i -= 1;
  }
  return answer;
}

console.log(solution('KAKAO')); // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution('ABABABABABABABAB')); // [1, 2, 27, 29, 28, 31, 30]
