function solution(n, k) {
  const splited = n.toString(k).split('0');

  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let result = 0;
  splited.forEach(num => isPrime(+num) && result++);
  return result;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
