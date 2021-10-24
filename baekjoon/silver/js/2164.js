const input = Number(require('fs').readFileSync('2164.txt').toString());

let cards = Array(input)
  .fill(0)
  .map((_, i) => i + 1);

while (cards.length > 1) {
  cards.shift();
  cards.push(cards.shift());
}
console.log(cards[0]);
