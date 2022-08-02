function solution(rows, columns, queries) {
  const board = Array.from(Array(rows + 1), (_, rowIndex) =>
    Array.from(Array(columns + 1), (_, columnIndex) =>
      rowIndex ? (columnIndex ? (rowIndex - 1) * columns + columnIndex : 0) : 0
    )
  );

  const result = [];
  queries.forEach(([x1, y1, x2, y2]) => {
    const queue = [];
    for (let i = y1; i < y2; i++) queue.push(board[x1][i]);
    for (let i = x1; i < x2; i++) queue.push(board[i][y2]);
    for (let i = y2; i > y1; i--) queue.push(board[x2][i]);
    for (let i = x2; i > x1; i--) queue.push(board[i][y1]);
    queue.unshift(queue.pop());

    result.push(Math.min(...queue));
    for (let i = y1; i < y2; i++) board[x1][i] = queue.shift();
    for (let i = x1; i < x2; i++) board[i][y2] = queue.shift();
    for (let i = y2; i > y1; i--) board[x2][i] = queue.shift();
    for (let i = x2; i > x1; i--) board[i][y1] = queue.shift();
  });
  return result;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
); // [8, 10, 25]
console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
); // [1, 1, 5, 3]
console.log(solution(100, 97, [[1, 1, 100, 97]])); // [1]
