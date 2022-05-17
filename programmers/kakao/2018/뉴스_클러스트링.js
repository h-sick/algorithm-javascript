function solution(str1, str2) {
  const isOnlyString = str => {
    const match = str.match(/^[a-zA-Z]+$/g);
    if (!match) return false;
    return true;
  };

  const getOnlyStrings = str => {
    const strings = [];
    for (let i = 0; i < str.length - 1; i++) {
      const sliced = str.substr(i, 2);
      if (isOnlyString(sliced)) {
        strings.push(sliced);
      }
    }
    return strings;
  };

  const onlyStrings1 = getOnlyStrings(str1.toLowerCase());
  const onlyStrings2 = getOnlyStrings(str2.toLowerCase());

  const counts1 = {};
  for (const str of onlyStrings1) {
    counts1[str] = (counts1[str] || 0) + 1;
  }

  const counts2 = {};
  for (const str of onlyStrings2) {
    counts2[str] = (counts2[str] || 0) + 1;
  }

  let intersection = 0;
  for (const key of Object.keys(counts1)) {
    if (counts1[key] && counts2[key]) {
      intersection += Math.min(counts1[key], counts2[key]);
    }
  }

  let union = 0;
  for (const key of new Set([
    ...Object.keys(counts1),
    ...Object.keys(counts2),
  ])) {
    union += Math.max(counts1[key] || 0, counts2[key] || 0);
  }

  if (!intersection && union) {
    return 0;
  }
  return Math.floor((65536 * intersection) / union) || 65536;
}

console.log(solution('FRANCE', 'french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('aa1+aa2', 'AAAA12'));
console.log(solution('E=M*C^2', 'e=m*c^2'));
