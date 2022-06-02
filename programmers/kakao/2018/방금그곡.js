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

  for (const musicinfo of musicinfos) {
    const [startTime, endTime, title, code] = musicinfo.split(',');

    const playTime = calcTimeDiff(startTime, endTime);
    const codes = code.match(/[A-Z]#?/g);

    let melody = code.repeat(Math.floor(playTime / codes.length));
    melody += codes.slice(0, playTime % codes.length).join('');

    let index = melody.indexOf(m);
    if (index === -1) continue;
    while (index !== -1) {
      if (melody[index + m.length] !== '#') {
        if (!answer.title || playTime > answer.playTime) {
          answer.playTime = playTime;
          answer.title = title;
        }
        break;
      }
      index = melody.indexOf(m, index + 1);
    }

    // if (new RegExp(`.*(${m})[^#]*$`).test(melody)) {
    //   if (!answer.title || playTime > answer.playTime) {
    //     answer.playTime = playTime;
    //     answer.title = title;
    //   }
    // }
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

// function solution(m, musicinfos) {
//   const arr = musicinfos.map(mi => {
//     const [start, end, title, code] = mi.split(',');
//     const hour = end.slice(0, 2) - start.slice(0, 2);
//     const minute = end.slice(3) - start.slice(3);
//     const runtime = 60 * hour + minute;

//     const codeArr = code.match(/[A-Z]#?/g);
//     let stream = code.repeat(Math.floor(runtime / codeArr.length));
//     stream += codeArr.slice(0, runtime % codeArr.length).join('');
//     console.log({ stream });
//     return [title, runtime, stream];
//   });

//   const answer = arr.filter(([_, __, stream]) => {
//     let i = stream.indexOf(m);
//     if (i === -1) return false;
//     while (i !== -1) {
//       if (stream[i + m.length] !== '#') return true;
//       i = stream.indexOf(m, i + 1);
//     }
//   });
//   if (!answer.length) return '(None)';

//   answer.sort((a, b) => {
//     if (a[1] === b[1]) return 0;
//     return b[1] - a[1];
//   });
//   return answer[0][0];
// }
