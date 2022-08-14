function solution(n) {
  const map = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  const pos = { x: -1, y: 0 };
  let order = 0;

  const AddOrderToMap = () => {
    order += 1;
    map[pos.x][pos.y] = order;
  };

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      pos.x += 1;
      AddOrderToMap();
    }
    for (let i = 0; i < n - 1; i++) {
      pos.y += 1;
      AddOrderToMap();
    }
    for (let i = 0; i < n - 2; i++) {
      pos.x -= 1;
      pos.y -= 1;
      AddOrderToMap();
    }
    n -= 3;
  }

  const answer = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      answer.push(map[i][j]);
    }
  }
  return answer;
}

console.log(solution(4)); // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6)); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
