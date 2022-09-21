var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  for (const interval of intervals) {
    const previous = result[result.length - 1];
    if (previous[1] < interval[0]) {
      result.push(interval);
    } else {
      previous[1] = Math.max(previous[1], interval[1]);
    }
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
