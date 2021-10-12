// 시간복잡도 실패
// function solution(people, limit) {
//   people.sort((a, b) => b - a);

//   let saved = 0;
//   while (people.length) {
//     if (people[0] + 40 <= limit) {
//       let index = 1;
//       while (index < people.length) {
//         if (people[0] + people[index] <= limit) {
//           people.splice(index, 1);
//           break;
//         }
//         index++;
//       }
//     }
//     people.shift();
//     saved++;
//   }
//   return saved;
// }

function solution(people, limit) {
  people.sort((a, b) => b - a);

  let stack = [];
  let saved = 0;
  while (people.length) {
    if (people[0] + 40 <= limit) {
      let index = 1;
      while (index < people.length) {
        if (people[0] + people[index] <= limit) {
          people.splice(index, 1);
          break;
        }
        index++;
      }
    }
    stack.push(people.shift());
    saved++;
  }
  return saved;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
console.log(solution([40, 50, 150, 160], 200)); // 2
console.log(solution([100, 500, 500, 900, 950], 1000)); // 3
