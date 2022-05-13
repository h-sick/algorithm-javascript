function solution(record) {
  const names = {};

  for (const log of record) {
    const [action, id, nickname] = log.split(' ');
    if (action === 'Enter' || action === 'Change') {
      names[id] = nickname;
    }
  }

  const result = [];
  for (const log of record) {
    const [action, id] = log.split(' ');
    if (action === 'Change') {
      continue;
    }

    let message = action === 'Enter' ? '들어왔습니다' : '나갔습니다';
    result.push(`${names[id]}님이 ${message}.`);
  }
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
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
