function solution(n, arr1, arr2) {
  const board1 = Array.from({ length: n }, () => []);
  const board2 = Array.from({ length: n }, () => []);

  const changeToBinary = num =>
    num.toString(2).padStart(n, 0).split('').map(Number);

  for (let i = 0; i < n; i++) {
    board1[i] = changeToBinary(arr1[i]);
    board2[i] = changeToBinary(arr2[i]);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    let string = '';
    for (let j = 0; j < n; j++) {
      if (board1[i][j] || board2[i][j]) string += '#';
      else string += ' ';
    }
    result.push(string);
  }
  return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
