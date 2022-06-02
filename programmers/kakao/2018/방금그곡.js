function solution(m, musicinfos) {
  const calcTimeDiff = (t1, t2) => {
    const [h1, m1] = t1.split(':').map(Number);
    const [h2, m2] = t2.split(':').map(Number);
    return (h2 - h1) * 60 + m2 - m1;
  };

  const answer = {
    playTime: 0,
    title: '',
  };

  const changeTitle = ({ playTime, title }) => {
    answer.playTime = playTime;
    answer.title = title;
  };

  for (const musicinfo of musicinfos) {
    let [startTime, endTime, title, music] = musicinfo.split(',');

    const playTime = calcTimeDiff(startTime, endTime);
    if (music.length < playTime) {
      music = music.repeat(Math.ceil(playTime / music.length));
    }
    music = music.slice(0, playTime);

    // if (new RegExp(`${m}[^#?]`).test(music)) {
    const index = music.indexOf(m);
    if (index > -1 && music[index + m.length] !== '#') {
      if (!answer.title) {
        changeTitle({ playTime, title });
        continue;
      }
      if (playTime > answer.playTime) changeTitle({ playTime, title });
    }
  }
  return answer.title ? answer.title : '(None)';
}

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "HELLO"
console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
); // "FOO"
console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // 	"WORLD"
