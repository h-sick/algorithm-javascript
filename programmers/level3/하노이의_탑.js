function solution(n) {
  const result = [];
  const hanoi = (n, from, mid, to) => {
    if (n === 1) {
      result.push([from, to]);
      return;
    }
    hanoi(n - 1, from, to, mid);
    result.push([from, to]);
    hanoi(n - 1, mid, from, to);
  };
  hanoi(n, 1, 2, 3);
  return result;
}

console.log(solution(2)); // 	[ [1,2], [1,3], [2,3] ]
