// routes를 3차원 배열로 만들어서 방향에 따라 탐색 여부를 비교하면 25번 테스트 케이스 통과 안됨
// routes를 2차원 배열로 만들어서 방향에 따른 탐색 여부를 비교하지 않으면, 11번과 19번에서 시간 초과
// 아니면 heap을 사용하는 방법도 있음

function solution(board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const n = board.length;
  const routes = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(4).fill(0))
  );
  const queue = [];
  let answer = Number.MAX_SAFE_INTEGER;

  queue.push([0, 0, 1, 0]);
  queue.push([0, 0, 2, 0]);
  while (queue.length) {
    const [x, y, dir, minCost] = queue.shift();
    if (x === n - 1 && y === n - 1) {
      if (answer > minCost) {
        answer = minCost;
      }
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx > n - 1 || ny > n - 1 || board[nx][ny]) {
        continue;
      }

      const cost = dir === i ? minCost + 100 : minCost + 600;
      if (routes[nx][ny][i] === 0 || routes[nx][ny][i] >= cost) {
        routes[nx][ny][i] = cost;
        queue.push([nx, ny, i, cost]);
      }
    }
  }
  return answer;
}

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 900
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ])
); // 3800
console.log(
  solution([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ])
); // 2100
console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ])
); // 3200
