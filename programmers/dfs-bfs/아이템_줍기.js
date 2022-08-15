function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from(Array(102), () => Array(102).fill(0));
  const doubleRectangle = rectangle.map(rect => rect.map(pos => pos * 2));
  doubleRectangle.forEach(([y1, x1, y2, x2]) => {
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        if (x === x1 || x === x2 || y === y1 || y === y2) {
          if (map[x][y] === 1) {
            continue;
          }
          map[x][y] += 1;
          continue;
        }
        map[x][y] += 2;
      }
    }
  });

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const visited = Array.from(Array(102), () => Array(102).fill(false));
  visited[characterY * 2][characterX * 2] = true;

  const isOutsideOfMap = (x, y) => x < 1 || y < 1 || x > 101 || y > 101;
  const isSafeRoute = (x, y) => {
    if (isOutsideOfMap(x, y)) return false;
    if (visited[x][y] || map[x][y] !== 1) return false;
    return true;
  };

  let distance = 0;
  const queue = [[characterY * 2, characterX * 2]];
  while (queue.length) {
    distance += 1;
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx === itemY * 2 && ny === itemX * 2) {
          return distance / 2;
        }
        if (!isSafeRoute(nx, ny)) {
          continue;
        }
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
  return distance;
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
); // 17
console.log(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ],
    9,
    7,
    6,
    1
  )
); // 11
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7)); // 9
console.log(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10
  )
); // 15
console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3
  )
); // 10
