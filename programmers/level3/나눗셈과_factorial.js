function solution(n, k) {
  const getFactorial = (arr) => arr.reduce((acc, cur) => acc * cur, 1);

  const result = [];
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let factorial = getFactorial(nums);
  k -= 1;

  for (let i = n - 1; i > 0; i--) {
    factorial = factorial / nums.length;
    const num = nums.splice(Math.floor(k / factorial), 1)[0];
    result.push(num);
    k = k % factorial;
  }
  result.push(nums[0]);
  return result;
}

console.log(solution(3, 5)); // [3,1,2]
