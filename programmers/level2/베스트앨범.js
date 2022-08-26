function solution(genres, plays) {
  const count = {};
  const playMap = {};
  genres.forEach((genre, index) => {
    count[genre] = (count[genre] || 0) + plays[index];
    if (!playMap[genre]) playMap[genre] = [];

    playMap[genre].push([plays[index], index]);
    playMap[genre].sort((a, b) => b[0] - a[0]);
    if (playMap[genre].length > 2) {
      playMap[genre].pop();
    }
  });

  const genreSortedByPlay = Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);
  return genreSortedByPlay.reduce(
    (acc, cur) => acc.concat(playMap[cur].map(([_, index]) => index)),
    []
  );
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
