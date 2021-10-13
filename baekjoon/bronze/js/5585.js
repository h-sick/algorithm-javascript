const input = require('fs').readFileSync('../text/5585.txt').toString();

let change = 1000 - Number(input);
const money = [500, 100, 50, 10, 5, 1];

let count = 0;
for (let coin of money) {
  count += parseInt(change / coin);
  change = change % coin;
}
console.log(count);
