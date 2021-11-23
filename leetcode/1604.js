var alertNames = function (keyName, keyTime) {
  let accessTimes = new Map();
  for (let i = 0; i < keyName.length; i++) {
    accessTimes.set(keyName[i], [
      ...(accessTimes.get(keyName[i]) || []),
      keyTime[i].split(':').map(Number),
    ]);
  }

  let answer = [];
  let names = new Set([...keyName]);
  for (let name of names) {
    accessTimes
      .get(name)
      .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

    const times = accessTimes.get(name);
    let count = 0;
    let left = 0;
    for (let right = 0; right < times.length; right++) {
      const [hour, minute] = times[right];
      let isOverHour = false;
      if (hour > times[left][0]) {
        isOverHour =
          (hour - times[left][0]) * 60 + minute - times[left][1] > 60;
        if (isOverHour) {
          left++;
          count--;
        }
      }
      count++;

      if (count === 3) {
        answer.push(name);
        break;
      }
    }
  }
  return answer.sort();
};

console.log(
  alertNames(
    ['leslie', 'leslie', 'leslie', 'clare', 'clare', 'clare', 'clare'],
    ['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49']
  )
);
