function solution(arrayA, arrayB) {
  const getMaxNonDivisor = (array, divisors) => {
    let maxNonDivisor = 0;
    for (const divisor of divisors) {
      let isNoDivide = true;
      for (const num of array) {
        if (num % divisor === 0) {
          isNoDivide = false;
          break;
        }
      }
      if (isNoDivide) {
        maxNonDivisor = Math.max(maxNonDivisor, divisor);
      }
    }
    return maxNonDivisor;
  };

  const getDivisors = (array) => {
    const divisors = [];
    const [min] = array;
    for (let i = 2; i <= min; i++) {
      let isDivide = true;
      for (const num of array) {
        if (num % i !== 0) {
          isDivide = false;
          break;
        }
      }
      if (isDivide) {
        divisors.push(i);
      }
    }
    return divisors;
  };

  const divisorsA = getDivisors(arrayA);
  const divisorsB = getDivisors(arrayB);
  return Math.max(
    getMaxNonDivisor(arrayB, divisorsA),
    getMaxNonDivisor(arrayA, divisorsB)
  );
}

console.log(solution([10, 17], [5, 20])); // 0
console.log(solution([10, 20], [5, 17])); // 10
console.log(solution([14, 35, 119], [18, 30, 102])); // 7

// 다른 사람의 좋은 답변
function solution(arrayA, arrayB) {
  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getAnswer(A, B) {
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}
