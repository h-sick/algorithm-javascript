function solution(a) {
  let minLeft = a[0];
  let minRight = a[a.length - 1];
  const noPops = new Set();

  for (let i = 1; i < a.length - 1; i++) {
    if (minLeft > a[i]) {
      minLeft = a[i];
      noPops.add(i);
    }
    if (minRight > a[a.length - 1 - i]) {
      minRight = a[a.length - 1 - i];
      noPops.add(a.length - 1 - i);
    }
  }
  return noPops.size + 2;
}

console.log(solution([9, -1, -5])); // 3
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])); // 6
