const getNextShuttleTime = (currentTime, interval) => {
  if (currentTime === '') return '09:00';
  let [hour, minute] = currentTime.split(':').map(Number);
  minute += interval;
  if (minute >= 60) {
    hour++;
    minute -= 60;
  }
  return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
};

const isThisCrewCanRideShuttle = (shuttleTime, [crewHour, crewMinute]) => {
  const [shuttleHour, shuttleMinute] = shuttleTime.split(':').map(Number);
  if (shuttleHour < +crewHour) return false;
  if (shuttleHour === +crewHour) return shuttleMinute >= +crewMinute;
  return true;
};

const makeEarlierOneMinute = ([hour, minute]) => {
  minute--;
  if (minute < 0) {
    hour--;
    minute += 60;
  }
  return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}`;
};

function solution(n, t, m, timetable) {
  const times = timetable
    .map(time => time.split(':'))
    .sort((crew1, crew2) =>
      crew1[0] === crew2[0] ? crew1[1] - crew2[1] : crew1[0] - crew2[0]
    );

  let latestCanGetRideTime = '';
  let currentTime = '';
  while (n) {
    const nextShuttleTime = getNextShuttleTime(currentTime, t);
    currentTime = nextShuttleTime;
    let acceptable = m;
    while (acceptable && times.length) {
      if (isThisCrewCanRideShuttle(nextShuttleTime, times[0])) {
        const lastCrewRideTime = times.shift();
        acceptable--;
        if (acceptable) latestCanGetRideTime = lastCrewRideTime;
        if (n === 1 && acceptable === 0)
          return makeEarlierOneMinute(lastCrewRideTime.map(Number));
      } else break;
    }
    n--;
  }
  if (+latestCanGetRideTime[0] < 9 || latestCanGetRideTime === '')
    return currentTime;
  return latestCanGetRideTime.join(':');
}

console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']));
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00']));
console.log(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01']));
console.log(solution(1, 1, 1, ['23:59']));
console.log(
  solution(10, 60, 45, [
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
  ])
);
