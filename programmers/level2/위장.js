function solution(clothes) {
  let hash = new Map();
  for (let [clothName, clothType] of clothes) {
    hash.set(clothType, (hash.get(clothType) || 0) + 1);
  }
  const clothTypes = [...hash.values()];
  let count = 1;
  for (let closeCount of clothTypes) {
    count *= closeCount + 1;
  }
  return count - 1;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5
console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3
