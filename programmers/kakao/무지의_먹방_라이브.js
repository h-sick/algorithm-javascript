function solution(food_times, k) {
  let foods = food_times
    .map((time, index) => ({
      id: index + 1,
      time,
    }))
    .sort((a, b) => a.time - b.time);

  let finished = 0;
  for (let i = 0; i < foods.length; i++) {
    const leftFoods = foods.length - i;
    const { time } = foods[i];
    const nowTime = time - finished;

    if (k < leftFoods * nowTime) {
      const foodIndex = k === 0 ? 0 : k % leftFoods;
      return foods.slice(i).sort((a, b) => a.id - b.id)[foodIndex].id;
    }
    k -= leftFoods * nowTime;
    finished = time;
  }
  return -1;
}

console.log(solution([3, 1, 2], 5));
console.log(solution([3, 7, 5], 8));
