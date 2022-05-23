function solution(m, n, board) {
  board = board.map(blocks => blocks.split(''));

  const dx = [0, 1, 1];
  const dy = [1, 1, 0];

  while (true) {
    const willCrushBlocks = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const block = board[i][j];
        if (!block) continue;

        let crush = true;
        for (let k = 0; k < 3; k++) {
          if (block !== board[i + dx[k]][j + dy[k]]) {
            crush = false;
            break;
          }
        }

        if (crush) {
          willCrushBlocks.push([i, j]);
        }
      }
    }

    if (!willCrushBlocks.length) {
      return board.reduce(
        (acc, row) => acc + row.filter(block => !block).length,
        0
      );
    }

    for (const [x, y] of willCrushBlocks) {
      board[x][y] = 0;
      for (let k = 0; k < 3; k++) {
        board[x + dx[k]][y + dy[k]] = 0;
      }
    }

    for (let i = m - 1; i > 0; i--) {
      if (board[i].every(block => block)) continue;

      for (let j = 0; j < n; j++) {
        let k = i - 1;
        while (!board[i][j] && k >= 0) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
          k -= 1;
        }
      }
    }
  }
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15
