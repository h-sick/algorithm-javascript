function solution(name) {
  const { length } = name;
  let upDownCount = 0;
  let leftRightCountList = [length - 1];

  for (const char of name) upDownCount += minUpOrDownCount(char);
  for (let startOfA = 0; startOfA < length; startOfA++) {
    let endOfA = startOfA + 1;
    while (endOfA < length && name[endOfA] === 'A') endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA];
    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA);
    leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA);
  }
  return upDownCount + Math.min(...leftRightCountList);
}

function minUpOrDownCount(destination) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = alphabet.indexOf(destination);
  return Math.min(index, alphabet.length - index);
}

console.log(solution('JEROEN')); // 56
console.log(solution('JAN')); // 23
