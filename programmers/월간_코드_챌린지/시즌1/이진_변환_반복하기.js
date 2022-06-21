function solution(s) {
  let x = s;
  let count = 0;
  let deleted = 0;

  while (x !== '1') {
    const deletedX = x.replace(/0/g, '');
    deleted += x.length - deletedX.length;
    x = deletedX.length.toString(2);
    count++;
  }
  return [count, deleted];
}

console.log(solution('110010101001')); // [3,8]
console.log(solution('01110')); // [3,3]
console.log(solution('1111111')); // [4,1]
