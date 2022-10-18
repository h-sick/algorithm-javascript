function solution(X, Y) {
  const arrX = [...X];
  const arrY = [...Y];

  let answer = "";
  for (let i = 0; i < 10; i++) {
    const X_count = arrX.filter((item) => +item === i).length;
    const Y_count = arrY.filter((item) => +item === i).length;
    answer += i.toString().repeat(Math.min(X_count, Y_count));
  }

  if (answer === "") {
    return "-1";
  }
  if (!answer.match(/[^0]/g)) {
    return "0";
  }
  return [...answer].sort().reverse().join("");
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
