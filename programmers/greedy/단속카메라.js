function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let cameraPoint = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    const [start, end] = [routes[i][0], routes[i][1]];
    if (start <= cameraPoint && cameraPoint <= end) continue;
    cameraPoint = end;
    count++;
  }
  return count;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
