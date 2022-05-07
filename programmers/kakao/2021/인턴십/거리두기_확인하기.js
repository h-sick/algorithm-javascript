const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const isSocialDistance = (place, queue) => {
  const checked = Array.from({ length: 5 }, () => Array(5).fill(0));

  while (queue.length) {
    const [x, y] = queue.shift();
    checked[x][y] = 1;

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && checked[nx][ny] === 0) {
        const input = place[nx][ny];
        if (input === 'P') return 0;
        if (input === 'X') checked[nx][ny] = 1;
        if (input === 'O' && place[x][y] === 'P') queue.unshift([nx, ny]);
      }
    }
  }
  return 1;
};

function solution(places) {
  const result = [];

  for (const place of places) {
    const queue = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') queue.push([i, j]);
      }
    }
    result.push(isSocialDistance(place, queue));
  }
  return result;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
); // [1,0,1,1,1]
