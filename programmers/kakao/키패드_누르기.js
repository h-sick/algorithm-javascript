function solution(numbers, hand) {
  const handByNumber = {
    1: 'L',
    4: 'L',
    7: 'L',
    3: 'R',
    6: 'R',
    9: 'R',
  };

  const locations = {
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      locations[i * 3 + j + 1] = [i, j];
    }
  }

  const getDistacneBetween = (num1, num2) =>
    Math.abs(locations[num1][0] - locations[num2][0]) +
    Math.abs(locations[num1][1] - locations[num2][1]);

  let [leftHand, rightHand] = ['*', '#'];
  let result = '';
  for (const number of numbers) {
    const currentHand = handByNumber[number];
    if (currentHand) {
      result += currentHand;
    } else {
      if (typeof number === 'number') {
        const leftHandDistance = getDistacneBetween(number, leftHand);
        const rightHandDistance = getDistacneBetween(number, rightHand);
        if (leftHandDistance < rightHandDistance) result += 'L';
        if (leftHandDistance > rightHandDistance) result += 'R';
        if (leftHandDistance === rightHandDistance)
          result += hand === 'left' ? 'L' : 'R';
      } else result += currentFinger === '*' ? 'L' : 'R';
    }
    result[result.length - 1] === 'L'
      ? (leftHand = number)
      : (rightHand = number);
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
