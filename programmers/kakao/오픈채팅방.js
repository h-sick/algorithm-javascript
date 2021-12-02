function solution(record) {
  let hash = new Map();
  let result = [];
  record.forEach((log) => {
    const [order, id, user] = log.split(' ');
    if (order === 'Enter' || order === 'Change') hash.set(id, user);
  });
  record.forEach((log) => {
    const [order, id] = log.split(' ');
    if (order === 'Enter') result.push(`${hash.get(id)}님이 들어왔습니다.`);
    if (order === 'Leave') result.push(`${hash.get(id)}님이 나갔습니다.`);
  });
  return result;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
