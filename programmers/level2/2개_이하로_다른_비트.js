function solution(numbers) {
  const f = x => {
    if (x % 2 === 0) return x + 1;
    const binary = 0 + x.toString(2);
    const lastZeroIndex = binary.lastIndexOf('0');
    return parseInt(
      `${binary.slice(0, lastZeroIndex)}10${binary.slice(lastZeroIndex + 2)}`,
      2
    );
  };

  return numbers.reduce((array, number) => {
    array.push(f(number));
    return array;
  }, []);
}

console.log(solution([2, 7])); // [3,11]
