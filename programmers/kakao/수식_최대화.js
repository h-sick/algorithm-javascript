function solution(expression) {
  const calculator = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
    }
  };

  const combinations = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  let max = 0;

  combinations.forEach(combination => {
    const operands = expression.match(/[0-9]+/g).map(Number);
    const operators = expression.match(/[\*\+\-]/g);

    combination.forEach(operator => {
      let index = operators.indexOf(operator);
      while (index !== -1) {
        const calcResult = calculator(
          operands[index],
          operands[index + 1],
          operator
        );
        operands[index + 1] = calcResult;
        operands.splice(index, 1);
        operators.splice(index, 1);

        index = operators.indexOf(operator);
      }
    });
    max = Math.max(Math.abs(operands[0]), max);
  });
  return max;
}

console.log(solution('100-200*300-500+20')); // 60420
console.log(solution('50*6-3*2')); // 300
