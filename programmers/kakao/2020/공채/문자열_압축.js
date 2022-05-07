function solution(s) {
  const { length } = s;
  let min = length;
  for (let unit = 1; unit <= length / 2; unit++) {
    let pressed = '';
    let count = 1;

    for (let i = 0; i < length; i += unit) {
      const sliced = s.substr(i, unit);
      const next = s.substr(i + unit, unit);
      if (sliced === next) count++;
      else {
        if (count > 1) pressed += count;
        pressed += sliced;
        count = 1;
      }
    }
    min = Math.min(min, pressed.length);
  }
  return min;
}

console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8
console.log(solution('abcabcabcabcdededededede')); // 14
console.log(solution('xababcdcdababcdcd')); // 17
