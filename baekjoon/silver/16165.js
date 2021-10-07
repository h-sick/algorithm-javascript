const inputs = require('fs').readFileSync('16165.txt').toString().split('\n');

let groupCount = inputs[0].split(' ')[0];
let quizCount = inputs[0].split(' ')[1];

let memberCount = 0,
  groupName = '';
let data = {};
for (let i = 1; i < inputs.length; i++) {
  if (groupCount >= 0) {
    if (!isNaN(inputs[i])) {
      memberCount = parseInt(inputs[i]);
      continue;
    }
    if (memberCount) {
      data[groupName].push(inputs[i]);
      memberCount--;
      continue;
    }
    if (!isNaN(inputs[i + 1])) {
      groupName = inputs[i];
      data[groupName] = [];
    }
    groupCount--;
    // if (groupCount === 0 && memberCount === 0) groupCount = -1;
  } else {
    console.log(inputs[i]);
  }
}

console.log(data);
