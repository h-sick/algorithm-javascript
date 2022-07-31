function solution(k, dungeons) {
  let max = 0;

  const visited = Array(dungeons.length).fill(false);
  const explore = (tired, count) => {
    max = Math.max(max, count);

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] > tired || visited[i]) continue;
      visited[i] = true;
      explore(tired - dungeons[i][1], count + 1);
      visited[i] = false;
    }
  };
  explore(k, 0);
  return max;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
