function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const now = [0, 0];
  const check = new Set();

  for (const dir of dirs) {
    const [nx, ny] = [now[0] + move[dir][0], now[1] + move[dir][1]];
    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) {
      continue;
    }

    check.add("" + now[0] + now[1] + nx + ny);
    check.add("" + nx + ny + now[0] + now[1]);
    now[0] = nx;
    now[1] = ny;
  }
  return check.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
