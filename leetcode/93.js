// Restore IP Addresses

var restoreIpAddresses = function (s) {
  const answer = [];
  const dfs = (count, start, temp) => {
    if (count === 4) {
      if (start === s.length) answer.push(temp);
      return;
    }

    for (let i = start; i < start + 3 && i < s.length; i++) {
      const num = s.slice(start, i + 1);
      if (+num <= 255) {
        dfs(count + 1, i + 1, temp.length ? `${temp}.${num}` : num);
        if (+num === 0) break;
      } else break;
    }
  };
  dfs(0, 0, '');

  return answer;
};

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses('1111'));
console.log(restoreIpAddresses('010010'));
console.log(restoreIpAddresses('101023'));
