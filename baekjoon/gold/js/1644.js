// 소수의 연속합

const input = +require('fs')
  .readFileSync('../text/1644.txt')
  .toString()
  .split('\n')[0];

if (input === 2) {
  console.log(1);
  return;
}
function countPrimes(n) {
  if (n <= 2) return 0;
  let checked = Array(n + 1).fill(0);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (checked[i]) continue;
    for (let j = i * i; j < n + 1; j += i) {
      checked[j] = 1;
    }
  }
  let primes = [];
  for (let i = 2; i < n + 1; i++) {
    if (!checked[i]) primes.push(i);
  }
  return primes;
}

let primes = countPrimes(input);
let left = 0,
  sum = 0,
  count = 0;
for (let right = 0; right < primes.length; right++) {
  sum += primes[right];
  while (sum > input) {
    sum -= primes[left++];
  }
  if (sum === input) count++;
}
console.log(count);
