function solution(maps) {
  const [n, m] = [maps.length - 1, maps[0].length - 1];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  maps[0][0] = 0;

  let distance = 1;
  const queue = [[0, 0]];
  while (queue.length) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const [x, y] = queue.shift();
      if (x === n && y === m) {
        return distance;
      }

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx < 0 || nx > n || ny < 0 || ny > m || !maps[nx][ny]) {
          continue;
        }
        maps[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
    distance++;
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
