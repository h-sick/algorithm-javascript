const input = require('fs').readFileSync('10809.txt').toString();

const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
let result = '';
alphabets.forEach((alphabet) => {
  if (input.indexOf(alphabet) !== -1) result += input.indexOf(alphabet) + ' ';
  else result += -1 + ' ';
});
console.log(result);
