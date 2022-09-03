function solution(board) {
  const [row, column] = [board.length, board[0].length];
  if (row <= 1 || column <= 1) return 1;

  let max = 0;
  const newBoard = board.map((row) => [...row]);
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (newBoard[i][j] === 0) continue;
      const up = newBoard[i - 1][j];
      const left = newBoard[i][j - 1];
      const diagonal = newBoard[i - 1][j - 1];

      const min = Math.min(up, left, diagonal);
      newBoard[i][j] = min + 1;
      max = Math.max(max, newBoard[i][j]);
    }
  }
  return max * max;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
); // 9
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
); // 4
