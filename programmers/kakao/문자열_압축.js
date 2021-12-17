function solution(s) {
  let minLength = s.length;
  const regex = count => new RegExp(`.\{1\,${count}\}`, 'g');
  const cutStringByLength = count => s.match(regex(count));
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const cutStrings = cutStringByLength(i);
    let pressedString = '';
    let repeatCount = 1;
    for (let j = 0; j < cutStrings.length - 1; j++) {
      if (cutStrings[j] === cutStrings[j + 1]) repeatCount++;
      else {
        pressedString += (repeatCount > 1 ? repeatCount : '') + cutStrings[j];
        repeatCount = 1;
      }
      if (j === cutStrings.length - 2)
        pressedString +=
          (repeatCount > 1 ? repeatCount : '') + cutStrings[j + 1];
    }
    minLength = Math.min(minLength, pressedString.length);
  }
  return minLength;
}
console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));

// const pressed = repeat =>
//     s.replace(
//       new RegExp(`(\\w+)\\1\{${repeat}\,\}`, 'g'),
//       match => `${match.length}${match[0]}`
//     );

//   let minLength = s.length;
//   for (let i = 1; i <= s.length; i++) {
//     console.log(i, pressed(i));
//     minLength = Math.min(minLength, pressed(i).length);
//   }
//   return minLength;
