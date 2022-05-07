function solution(n, k, cmd) {
  class Node {
    constructor(index, prev = null) {
      this.index = index;
      this.prev = prev;
      this.next = null;
    }
  }

  let prevNode = new Node(0);
  let selected;

  for (let i = 1; i < n; i++) {
    const node = new Node(i, prevNode);
    prevNode.next = node;
    prevNode = node;

    if (i === k) {
      selected = node;
    }
  }

  const deleted = [];

  const moveSelected = (count, direction) => {
    for (let i = 0; i < count; i++) {
      if (!selected[direction]) break;
      selected = selected[direction];
    }
  };

  const deleteNode = () => {
    deleted.push(selected);

    const { prev, next } = selected;
    selected = next ? next : prev;

    if (prev) prev.next = next;
    if (next) next.prev = prev;
  };

  const recoverNode = () => {
    const node = deleted.pop();

    const { prev, next } = node;

    if (prev) prev.next = node;
    if (next) next.prev = node;
  };

  cmd.forEach(input => {
    switch (input[0]) {
      case 'U':
        moveSelected(input.split(' ')[1], 'prev');
        break;
      case 'D':
        moveSelected(input.split(' ')[1], 'next');
        break;
      case 'C':
        deleteNode();
        break;
      case 'Z':
        recoverNode();
        break;
    }
  });

  const result = Array(n).fill('O');
  deleted.forEach(node => (result[node.index] = 'X'));
  return result.join('');
}

// 효율성 통과 x
// function solution(n, k, cmd) {
//   let table = Array.from({ length: n }, (_, i) => i);
//   let cur = k;
//   const deleted = [];

//   for (let input of cmd) {
//     let distance;
//     if (input.length > 1) {
//       [input, distance] = input.split(' ');
//     }
//     switch (input) {
//       case 'D':
//         cur += +distance;
//         break;
//       case 'U':
//         cur -= +distance;
//         break;
//       case 'C':
//         deleted.push([cur, table.splice(cur, 1)[0]]);
//         if (cur === table.length) cur -= 1;
//         break;
//       case 'Z':
//         const [beforeCur, content] = deleted.pop();
//         table.splice(beforeCur, 0, content);
//         if (beforeCur <= cur) cur += 1;
//         break;
//     }
//   }

//   const result = Array.from({ length: n }, () => 'X');
//   table.forEach(index => (result[index] = 'O'));
//   return result.join('');
// }

console.log(
  solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'])
); // "OOOOXOOO"
console.log(
  solution(8, 2, [
    'D 2',
    'C',
    'U 3',
    'C',
    'D 4',
    'C',
    'U 2',
    'Z',
    'Z',
    'U 1',
    'C',
  ])
); // "OOXOXOOO"
