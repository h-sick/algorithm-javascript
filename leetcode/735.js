// Asteroid Collision

function solution(asteroids) {
  let stack = [],
    addNegative;
  for (let i = 0; i < asteroids.length; i++) {
    if (stack[stack.length - 1] > 0 && asteroids[i] < 0) {
      while (stack[stack.length - 1] > 0) {
        addNegative = null;
        if (stack[stack.length - 1] === Math.abs(asteroids[i])) {
          stack.pop();
          break;
        }
        if (stack[stack.length - 1] > Math.abs(asteroids[i])) break;
        if (stack[stack.length - 1] < Math.abs(asteroids[i])) {
          stack.pop();
          addNegative = asteroids[i];
        }
      }
      if (addNegative) stack.push(addNegative);
    } else stack.push(asteroids[i]);
  }
  return stack;
}

// console.log(solution([5, 10, -5])); // [5,10]
// console.log(solution([8, -8])); // []
// console.log(solution([10, 2, -5])); // [10]
// console.log(solution([-2, -1, 1, 2])); // [-2,-1,1,2]
// console.log(solution([-2, -2, 1, -1])); // [-2, -2]
// console.log(solution([-2, -2, 1, -2])); // [-2, -2, -2];
// console.log(solution([10, 2, -5])); // [10, -5];

console.log(solution([3, 5, -2, -5]));
console.log(solution([-2, -1, -3, 1, 3]));
console.log(solution([-2, -1, 2, 1, -3, 2]));
