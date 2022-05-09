function solution(user_id, banned_id) {
  const isIllegalUser = (user, banned) => {
    if (user.length !== banned.length) return false;
    for (let i = 0; i < user.length; i++) {
      if (banned[i] === '*') continue;
      if (user[i] !== banned[i]) return false;
    }
    return true;
  };

  let result = 0;

  const answer = {};

  const checked = Array(user_id.length).fill(0);
  const dfs = (banIndex, userIndex, temp) => {
    if (temp.length < banIndex) {
      return;
    }

    if (banIndex === banned_id.length) {
      const key = temp.sort().join('');
      if (!answer[key]) {
        answer[key] = true;
        result += 1;
      }
      return;
    }

    for (let i = banIndex; i < banned_id.length; i++) {
      for (let j = userIndex; j < user_id.length; j++) {
        if (checked[j] || !isIllegalUser(user_id[j], banned_id[i])) continue;
        checked[j] = 1;
        dfs(i + 1, 0, [...temp, user_id[j]]);
        checked[j] = 0;
      }
    }
  };
  dfs(0, 0, []);

  return result;
}

// console.log(
//   solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', 'abc1**'])
// ); // 2
// console.log(
//   solution(
//     ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
//     ['*rodo', '*rodo', '******']
//   )
// ); // 2
console.log(
  solution(
    ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
    ['fr*d*', '*rodo', '******', '******']
  )
); // 3
