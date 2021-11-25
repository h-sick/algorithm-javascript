// Ugly Number II
var nthUglyNumber = function (n) {
  let [p2, p3, p5] = [1, 1, 1];
  const numbers = Array(n + 1);
  numbers[1] = 1;

  for (let i = 2; i <= n; i++) {
    const factors = [numbers[p2] * 2, numbers[p3] * 3, numbers[p5] * 5];
    const min = Math.min(...factors);
    if (min === factors[0]) p2++;
    if (min === factors[1]) p3++;
    if (min === factors[2]) p5++;
    numbers[i] = min;
  }
  return numbers[n];
};
console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));
console.log(nthUglyNumber(11));
