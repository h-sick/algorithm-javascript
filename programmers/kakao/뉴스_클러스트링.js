const getMatchedChrater = (str) => {
  const onlyStringRegex = /^[a-zA-Z]+$/g;
  const isOnlyString = (str) => {
    const result = str.match(onlyStringRegex);
    if (result === null) return false;
    return str === result[0];
  };

  const characters = [];
  for (let i = 0; i < str.length - 1; i++) {
    const sliced = str.slice(i, i + 2);
    if (isOnlyString(sliced)) characters.push(sliced.toLowerCase());
  }
  return characters;
};

function solution(str1, str2) {
  const [string1, string2] = [getMatchedChrater(str1), getMatchedChrater(str2)];

  const countString1 = {};
  for (const string of string1) {
    countString1[string] = (countString1[string] || 0) + 1;
  }

  const countString2 = {};
  for (const string of string2) {
    countString2[string] = (countString2[string] || 0) + 1;
  }

  const count = {};
  for (const [key, value] of Object.entries(countString1)) {
    if (countString2[key]) {
      if (value <= countString2[key]) {
        count[key] = countString2[key];
        continue;
      }
    }
    count[key] = value;
  }

  for (const [key, value] of Object.entries(countString2)) {
    if (countString1[key]) continue;
    count[key] = value;
  }

  let countSameStrings = 0;
  for (const key of Object.keys(count)) {
    if (countString1[key] && countString2[key])
      countSameStrings += Math.min(countString1[key], countString2[key]);
  }

  const countAllStrings = [...Object.values(count)].reduce(
    (acc, cur) => acc + cur,
    0
  );

  if (countSameStrings === 0) {
    if (countAllStrings) return 0;
    return 65536;
  }
  return Math.floor(65536 * (countSameStrings / countAllStrings));
}

console.log(solution('FRANCE', 'french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('aa1+aa2', 'AAAA12'));
console.log(solution('E=M*C^2', 'e=m*c^2'));

console.log(solution('A+C', 'DEF'));
console.log(solution('abcccc', 'cccdefff'));
