function solution(files) {
  const newFiles = files.map((file, index) => {
    const obj = { index, head: '', number: '', tail: '' };
    let temp = '';
    for (let i = 0; file.length; i++) {
      if (!obj.head && file[i] !== ' ' && !isNaN(file[i])) {
        obj.head = temp.toLowerCase();
        temp = '';
      } else if (obj.head && !obj.number && isNaN(file[i])) {
        obj.number = parseInt(temp);
        obj.tail = file.slice(i);
        break;
      }
      temp += file[i];

      if (obj.head && !obj.number && temp.length === 5) {
        obj.number = parseInt(temp);
        obj.tail = file.slice(i + 1);
        break;
      }
    }
    return obj;
  });

  newFiles.sort((prev, next) => {
    if (prev.head === next.head) {
      if (prev.number === next.number) {
        return 0;
      }
      return prev.number - next.number;
    } else return prev.head > next.head ? 1 : -1;
  });
  return newFiles.map(({ index }) => files[index]);
}

// console.log(
//   solution([
//     'img12.png',
//     'img10.png',
//     'img02.png',
//     'img1.png',
//     'IMG01.GIF',
//     'img2.JPG',
//   ])
// ); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
// console.log(
//   solution([
//     'F-5 Freedom Fighter',
//     'B-50 Superfortress',
//     'A-10 Thunderbolt II',
//     'F-14 Tomcat',
//   ])
// ); //  ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

console.log(solution(['foo9.txt', 'foo010bar020.zip', 'F-15']));
