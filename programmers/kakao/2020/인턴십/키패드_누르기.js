function solution(numbers, hand) {
  let result = '';
  const pos = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  const handPosition = [
    [3, 0],
    [3, 2],
  ];

  const getDistance = ([x1, y1], [x2, y2]) =>
    Math.abs(x2 - x1) + Math.abs(y2 - y1);

  const LEFT = 'L';
  const RIGHT = 'R';
  const moveHand = (putHand, number) => {
    result += putHand;
    handPosition[putHand === LEFT ? 0 : 1] = pos[number];
  };

  for (const number of numbers) {
    if (String(number).match(/[147]/)) {
      moveHand(LEFT, number);
      continue;
    }
    if (String(number).match(/[369]/)) {
      moveHand(RIGHT, number);
      continue;
    }
    const leftHandDistance = getDistance(pos[number], handPosition[0]);
    const rightHandDistance = getDistance(pos[number], handPosition[1]);
    if (leftHandDistance === rightHandDistance)
      moveHand(hand === 'left' ? LEFT : RIGHT, number);
    else if (leftHandDistance < rightHandDistance) moveHand(LEFT, number);
    else moveHand(RIGHT, number);
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
