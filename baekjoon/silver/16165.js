const inputs = require('fs').readFileSync('16165.txt').toString().split('\n');

let n = inputs[0].split('')[0];
let m = inputs[0].split('')[2];

let member = new Map();

let index = 1;
for (let i = 0; i < n; i++) {
  const memberNumber = Number(inputs[index + 1]);

  for (let j = 0; j < memberNumber; j++) {
    member.set(inputs[index + 2 + j], inputs[index]);
  }
  index += 2 + memberNumber;
}
const sortedMember = new Map([...member.entries()].sort());

for (let i = 0; i < m; i++) {
  if (inputs[index + 1] == 1) {
    console.log(member.get(inputs[index]));
    index += 2;
    continue;
  }
  for (let [person, group] of sortedMember) {
    if (inputs[index] === group) console.log(person);
  }
  index += 2;
}
