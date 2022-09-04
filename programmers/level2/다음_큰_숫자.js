function solution(n) {
  const countOne = (num) => num.toString(2).match(/1/g).length;
  const one = countOne(n);

  while (true) {
    if (one === countOne(++n)) return n;
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
