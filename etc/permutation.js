function permutation(arr) {
  const result = [];
  const dfs = (i, arr) => {
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      dfs(i + 1, arr);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return result;
  };
  return dfs(0, arr);
}

console.log(permutation(["a", "b", "c"]));
console.log(permutation([1, 2, 3]));
