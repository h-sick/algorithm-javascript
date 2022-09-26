function solution(arr) {
  const result = [0, 0];

  const compress = (array, n) => {
    const firstValue = array[0][0];
    if (n <= 1) {
      result[firstValue] += 1;
      return;
    }

    const sum = array.reduce(
      (acc, cur) => acc + cur.reduce((a, c) => a + c, 0),
      0
    );
    if (sum === 0 || sum === n ** 2) {
      result[firstValue] += 1;
      return;
    }

    const [divide1, divide2] = [array.slice(0, n / 2), array.slice(n / 2)];
    compress(
      divide1.map((values) => values.slice(0, n / 2)),
      n / 2
    );
    compress(
      divide1.map((values) => values.slice(n / 2)),
      n / 2
    );
    compress(
      divide2.map((values) => values.slice(0, n / 2)),
      n / 2
    );
    compress(
      divide2.map((values) => values.slice(n / 2)),
      n / 2
    );
  };

  compress(arr, arr.length);
  return result;
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
); // [4,9]
console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
); // [10,15]
