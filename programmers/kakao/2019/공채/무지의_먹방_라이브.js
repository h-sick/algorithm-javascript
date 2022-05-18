function solution(food_times, k) {
  const times = food_times
    .map((time, index) => ({
      id: index + 1,
      time,
    }))
    .sort((a, b) => a.time - b.time);

  let lastTime = 0;
  for (let i = 0; i < times.length; i++) {
    const lefts = times.length - i;
    const foodTime = times[i].time;
    const currentTime = foodTime - lastTime;

    if (k < lefts * currentTime) {
      const index = k === 0 ? 0 : k % lefts;
      const timesSortedByIndex = times.slice(i).sort((a, b) => a.id - b.id);
      return timesSortedByIndex[index].id;
    }
    k -= lefts * currentTime;
    lastTime = foodTime;
  }
  return -1;
}

console.log(solution([3, 1, 2], 5)); // 1
