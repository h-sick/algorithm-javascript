// 크로아티아 알파벳

let inputs = require('fs')
  .readFileSync('../text/2941.txt')
  .toString()
  .split('\n')[0]
  .trim();

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let tempString = '',
  count = 0;
inputs.split('').forEach((char) => {
  tempString += char;
  croatian.some((alphabet) => {
    const alphabetIndex = tempString.indexOf(alphabet);
    if (alphabetIndex !== -1) {
      count += alphabetIndex + 1;
      tempString = '';
      return false;
    }
  });
});

console.log(count + tempString.length);
