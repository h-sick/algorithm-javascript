var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = Array.from({ length: n }, () => Array());
  flights.forEach(([from, to, price]) => {
    graph[from].push([to, price]);
  });
  // 정렬 안해도됨
  graph.forEach(route => route.sort((a, b) => a[1] - b[1]));

  const prices = Array(n).fill(Number.MAX_SAFE_INTEGER);
  prices[src] = 0;

  let level = 1;
  const queue = [[src, 0]];
  while (queue.length) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const [point, priceToPoint] = queue.shift();
      for (const [to, price] of graph[point]) {
        if (price + priceToPoint < prices[to]) {
          prices[to] = price + priceToPoint;
          queue.push([to, prices[to]]);
        }
      }
    }
    if (level > k) {
      break;
    }
    level += 1;
  }

  if (prices[dst] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  return prices[dst];
};

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 1],
      [0, 2, 5],
      [1, 2, 1],
      [2, 3, 1],
    ],
    0,
    3,
    1
  )
); // 6

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
); // 700
console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
); // 200
console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    0
  )
); // 500
