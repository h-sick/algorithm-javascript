function solution(bridge_length, weight, truck_weights) {
  const firstTruck = truck_weights.shift();
  const queue = Array(bridge_length).fill(0);
  queue[0] = firstTruck;

  let totalWeight = firstTruck;
  let time = 1;

  while (totalWeight) {
    totalWeight -= queue.pop();

    if (truck_weights[0] + totalWeight <= weight) {
      const onBridgeTruck = truck_weights.shift();
      queue.unshift(onBridgeTruck);
      totalWeight += onBridgeTruck;
    } else queue.unshift(0);
    time += 1;
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
