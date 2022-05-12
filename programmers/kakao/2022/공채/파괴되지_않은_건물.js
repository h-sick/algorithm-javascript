function solution(board, skill) {
  const [n, m] = [board.length, board[0].length];
  const sumBoard = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let [type, r1, c1, r2, c2, degree] of skill) {
    if (type === 1) degree *= -1;
    sumBoard[r1][c1] += degree;
    sumBoard[r2 + 1][c2 + 1] += degree;
    sumBoard[r1][c2 + 1] += degree * -1;
    sumBoard[r2 + 1][c1] += degree * -1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      sumBoard[i][j] += sumBoard[i - 1][j];
    }
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      sumBoard[i][j] += sumBoard[i][j - 1];
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      board[i][j] += sumBoard[i][j];

      if (board[i][j] > 0) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
); // 10
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
); // 6
