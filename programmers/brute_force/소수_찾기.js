function solution(numbers) {
  const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    let nums = Array(num + 1).fill(true);

    for (let i = 2; i <= Math.sqrt(num); i++) {
      for (let j = i * i; j <= num; j += i) {
        nums[j] = false;
      }
    }
    return nums[nums.length - 1];
  };

  let numberList = numbers.split('');
  let count = 0;

  let makedNumbers = new Set();
  let temp = [];
  let checked = Array(numberList.length).fill(0);
  function makeNumbers(index) {
    if (index === numbers.length) {
      if (temp.length) makedNumbers.add(parseInt([...temp].join('')));
      return;
    }

    for (let i = 0; i < numberList.length; i++) {
      if (checked[i]) continue;
      temp.push(numberList[i]);
      checked[i] = 1;
      makeNumbers(index + 1);
      temp.pop();
      checked[i] = 0;
      makeNumbers(index + 1);
    }
  }
  makeNumbers(0);

  [...makedNumbers].forEach((num) => isPrime(num) && count++);
  return count;
}

console.log(solution('17')); // 3
console.log(solution('011')); // 2
