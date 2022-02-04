const getCommonDivisor = (m, n) => {
  const left = m % n;
  if (left === 0) return n;
  return getCommonDivisor(n, left);
};

function solution(w, h) {
  const cutted = w + h - getCommonDivisor(w, h);
  return w * h - cutted;
}

console.log(solution(8, 12)); // 80
