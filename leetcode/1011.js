// Capacity To Ship Packages Within D Days

var shipWithinDays = function (weights, days) {
  const getTakeDay = (weightPerDay) => {
    let [total, days] = [0, 1];
    for (const weight of weights) {
      total += weight;
      if (total > weightPerDay) {
        total = weight;
        days++;
      }
    }
    return days;
  };

  let start = Math.max(...weights);
  let end = weights.reduce((acc, cur) => acc + cur, 0);

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (getTakeDay(mid) > days) start = mid + 1;
    else end = mid;
  }
  return end;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
