function solution(x) {
  const nums = String(x);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Number(nums[i]);
  }
  return x % sum == 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
