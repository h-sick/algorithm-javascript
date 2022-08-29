function solution(line) {
  const points = [];
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];
      const slope = a * d - b * c;
      if (!slope) {
        continue;
      }

      const x = (b * f - e * d) / slope;
      const y = (e * c - a * f) / slope;
      if (Number.isInteger(x) && Number.isInteger(y)) {
        points.push([x, y]);
      }
    }
  }

  const [minX, minY, maxX, maxY] = points.reduce(
    ([minX, minY, maxX, maxY], [x, y]) => [
      Math.min(minX, x),
      Math.min(minY, y),
      Math.max(maxX, x),
      Math.max(maxY, y),
    ],
    [
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
    ]
  );

  const board = Array.from({ length: maxY - minY + 1 }, () =>
    Array(maxX - minX + 1).fill(".")
  );

  points.forEach(([x, y]) => (board[maxY - y][x - minX] = "*"));
  return board.map((item) => item.join(""));
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
); // ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
console.log(
  solution([
    [0, 1, -1],
    [1, 0, -1],
    [1, 0, 1],
  ])
); // ["*.*"]
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
  ])
); // ["*"]
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
    [4, -1, 0],
  ])
); // ["*"]
