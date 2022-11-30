function solution(food) {
  return food.reverse().reduce((acc, cur, idx) => {
    const calorie = (food.length - idx - 1).toString();

    const repeatedFood = calorie.repeat(parseInt(cur / 2));

    return repeatedFood + acc + repeatedFood;
  }, '0');
}

console.log(solution([1, 3, 4, 6])); // '1223330333221'
console.log(solution([1, 7, 1, 2])); // '111303111'
