function solution(price, money, count) {
  let sum = 0;
  let use = 0;
  while (use < count) {
    use += 1;
    sum += use * price;
  }
  return sum - money > 0 ? sum - money : 0;
}

console.log(solution(3, 20, 4)); // 10
