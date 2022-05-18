function solution(play_time, adv_time, logs) {
  const getSecTime = time => {
    const [hour, minute, second] = time.split(':').map(Number);
    return hour * 60 * 60 + minute * 60 + second;
  };

  const play_time_sec = getSecTime(play_time);
  const adv_time_sec = getSecTime(adv_time);
  const logs_start_sec = Array(logs.length).fill('');
  const logs_end_sec = Array(logs.length).fill('');

  logs.forEach((log, i) => {
    const [start, end] = log.split('-');
    logs_start_sec[i] = getSecTime(start);
    logs_end_sec[i] = getSecTime(end);
  });

  const total_time = Array(play_time_sec).fill(0);

  for (let i = 0; i < logs.length; i++) {
    total_time[logs_start_sec[i]] += 1;
    total_time[logs_end_sec[i]] -= 1;
  }

  for (let i = 1; i < play_time_sec; i++) {
    total_time[i] += total_time[i - 1];
  }

  for (let i = 1; i < play_time_sec; i++) {
    total_time[i] += total_time[i - 1];
  }

  let adv_start_time = 0;
  let max_time = total_time[adv_time_sec - 1];
  for (let i = adv_time_sec - 1; i < play_time_sec; i++) {
    const sum_count = total_time[i] - total_time[i - adv_time_sec];
    if (sum_count > max_time) {
      max_time = sum_count;
      adv_start_time = i - adv_time_sec + 1;
    }
  }

  const formatTime = time => {
    let format = '';
    const [hour, minute, second] = [
      Math.floor(time / (60 * 60)),
      Math.floor((time % (60 * 60)) / 60),
      time % 60,
    ];

    format += hour < 10 ? `0${hour}:` : `${hour}:`;
    format += minute < 10 ? `0${minute}:` : `${minute}:`;
    format += second < 10 ? `0${second}` : second;
    return format;
  };

  return formatTime(adv_start_time);
}

console.log(
  solution('02:03:55', '00:14:15', [
    '01:20:15-01:45:14',
    '00:40:31-01:00:00',
    '00:25:50-00:48:29',
    '01:30:59-01:53:29',
    '01:37:44-02:02:30',
  ])
); // "01:30:59"
console.log(
  solution('99:59:59', '25:00:00', [
    '69:59:59-89:59:59',
    '01:00:00-21:00:00',
    '79:59:59-99:59:59',
    '11:00:00-31:00:00',
  ])
); // "01:00:00"
console.log(
  solution('50:00:00', '50:00:00', [
    '15:36:51-38:21:49',
    '10:14:18-15:36:51',
    '38:21:49-42:51:45',
  ])
); // "00:00:00"
