// Super Ugly Number

var nthSuperUglyNumber = function (n, primes) {
  const uglys = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  uglys[1] = 1;
  const numbers = Array(primes.length).fill(1);

  for (let i = 2; i <= n; i++) {
    const compareNumber = (num) => primes[num] * uglys[numbers[num]];
    for (let j = 0; j < primes.length; j++) {
      if (uglys[i] > compareNumber(j)) uglys[i] = compareNumber(j);
    }
    for (let j = 0; j < primes.length; j++) {
      if (uglys[i] === compareNumber(j)) numbers[j]++;
    }
  }
  return uglys[n];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
console.log(nthSuperUglyNumber(1, [2, 3, 5]));
console.log(
  nthSuperUglyNumber(
    100000,
    [
      7, 19, 29, 37, 41, 47, 53, 59, 61, 79, 83, 89, 101, 103, 109, 127, 131,
      137, 139, 157, 167, 179, 181, 199, 211, 229, 233, 239, 241, 251,
    ]
  )
);

// Time Limit Exceeded
// var nthSuperUglyNumber = function (n, primes) {
//   const prime = {};
//   for (num of primes) prime[num] = 1;

//   const numbers = Array(n + 1);
//   numbers[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     const min = [...Object.entries(prime)].sort(
//       (a, b) => a[0] * numbers[a[1]] - b[0] * numbers[b[1]]
//     )[0];
//     const newNumber = min[0] * numbers[min[1]];
//     numbers[i] = newNumber;
//     if (numbers[i - 1] === newNumber) n++;
//     prime[min[0]]++;
//   }
//   return numbers.pop();
// };
