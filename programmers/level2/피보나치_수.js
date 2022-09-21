function solution(n) {
  function fibonacci(n) {
    const nums = [0, 1];
    for (let i = 2; i <= n; i++) {
      nums[i] = (nums[i - 1] + nums[i - 2]) % 1234567;
    }
    return nums[n];
  }

  return fibonacci(n) % 1234567;
}

// 시간 초과, 런타임 에러
// function solution(n) {
//   const fibonacci = (n) => {
//     if (n < 2) {
//       return n;
//     }
//     return (fibonacci(n - 2) + fibonacci(n - 1)) % 1234567;
//   };

//   const memoize = (callBack) => {
//     const cache = {};
//     return (...args) => {
//       if (cache[args]) {
//         return cache[args];
//       }
//       const result = callBack.apply(null, args);
//       cache[args] = result;
//       return result;
//     };
//   };

//   return memoize(fibonacci)(n);
// }

console.log(solution(3)); // 2
console.log(solution(5)); // 5
