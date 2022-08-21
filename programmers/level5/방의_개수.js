function solution(arrows) {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const visited = new Set();
  const directions = new Set();

  let count = 0;
  let [x, y] = [0, 0];
  visited.add([x, y].join(''));
  arrows.forEach(arrow => {
    for (let i = 0; i < 2; i++) {
      const [nx, ny] = [x + dx[arrow], y + dy[arrow]];
      const direction1 = [x, y, nx, ny].join('');
      const direction2 = [nx, ny, x, y].join('');
      const visitPoint = [nx, ny].join('');

      if (visited.has(visitPoint)) {
        if (!directions.has(direction1)) {
          count += 1;
        }
      } else {
        visited.add(visitPoint);
      }

      directions.add(direction1);
      directions.add(direction2);
      [x, y] = [nx, ny];
    }
  });
  return count;
}

console.log(
  solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0])
); // 3
