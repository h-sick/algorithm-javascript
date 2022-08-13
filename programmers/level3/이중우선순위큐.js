function solution(operations) {
  const priorityQueue = [];
  for (const operation of operations) {
    const commandNumber = Number(operation.slice(2));
    if (operation[0] === 'I') {
      priorityQueue.push(commandNumber);
      priorityQueue.sort((a, b) => a - b);
    }
    if (operation[0] === 'D') {
      if (commandNumber === 1) priorityQueue.pop();
      if (commandNumber === -1) priorityQueue.shift();
    }
  }

  if (priorityQueue.length === 0) {
    return [0, 0];
  }
  return [priorityQueue.pop(), priorityQueue.shift()];
}

console.log(
  solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'])
); // [0,0]
console.log(
  solution([
    'I -45',
    'I 653',
    'D 1',
    'I -642',
    'I 45',
    'I 97',
    'D 1',
    'D -1',
    'I 333',
  ])
); // [333, -45]
