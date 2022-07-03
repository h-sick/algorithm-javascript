function solution(key, lock) {
  const { length } = key;

  const rotateKey = currentKey => {
    const newKey = Array.from({ length }, () => Array(length).fill(null));
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        newKey[i][j] = currentKey[length - 1 - j][i];
      }
    }
    return newKey;
  };

  const isRightKey = newBoard => {
    for (let i = lock.length - 1; i < lock.length * 2 - 1; i++) {
      for (let j = lock.length - 1; j < lock.length * 2 - 1; j++) {
        if (newBoard[i][j] !== 1) {
          return false;
        }
      }
    }
    return true;
  };

  const board = Array.from({ length: lock.length * 3 - 2 }, () =>
    Array(lock.length * 3 - 2).fill(null)
  );

  for (let i = lock.length - 1; i < lock.length * 2 - 1; i++) {
    for (let j = lock.length - 1; j < lock.length * 2 - 1; j++) {
      board[i][j] = lock[i - lock.length + 1][j - lock.length + 1];
    }
  }

  const addKeyToBoard = (i, j, currentKey) => {
    const newBoard = board.map(row => [...row]);
    for (let x = 0; x < length; x++) {
      for (let y = 0; y < length; y++) {
        newBoard[i + x][j + y] += currentKey[x][y];
      }
    }
    return newBoard;
  };

  let currentKey = key;
  for (let dir = 0; dir < 4; dir++) {
    for (let i = 0; i < lock.length * 2 - 1; i++) {
      for (let j = 0; j < lock.length * 2 - 1; j++) {
        const boardWithKey = addKeyToBoard(i, j, currentKey);
        if (isRightKey(boardWithKey)) return true;
      }
    }
    currentKey = rotateKey(currentKey);
  }
  return false;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
); // true
