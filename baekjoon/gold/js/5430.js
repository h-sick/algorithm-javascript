// AC
// 조용우 풀이, 나는 아직 안푼 문제

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../text/5430.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let tc = Number(input[0]);
let index = 1; // input읽어올 index 지정
// testcase만큼 반복
for (let i = 0; i < tc; i++) {
  let error = 0;
  let str = input[index];
  let num = Number(input[index + 1]);
  let reverse_cnt = 0;
  let arr = input[index + 2].trim();
  // 앞뒤 [ ] 제거하고 ,를 구분자로하여 배열에 숫자 삽입
  arr = arr
    .substring(1, arr.length - 1)
    .split(',')
    .map(Number);
  // 빈배열이 들어왔을때를 처리하기위한 조건문
  if (arr[0] === 0) arr.length = 0;

  // 수행할 함수 수행
  for (let j = 0; j <= str.length - 1; j++) {
    if (str[j] === 'R') {
      // R이 들어오면 reverse_cnt 1증가
      reverse_cnt++;
    } else {
      if (arr.length === 0) {
        // D가 들어왔을 때 배열길이가 0인경우 error
        error = 1;
        break;
      }
      if (reverse_cnt % 2 === 0) {
        // 현재까지 R이 짝수인경우 맨앞에서 원소제거
        arr.shift();
      } else {
        // 현재까지 R이 홀수인경우 맨뒤에서 원소제거
        arr.pop();
      }
    }
  }
  // error경우
  if (error === 1) console.log('error');
  else {
    if (reverse_cnt % 2 === 1) {
      // R이 홀수인 경우 reverse해서 출력
      console.log('[' + arr.reverse().join(',') + ']');
    } else {
      // R이 짝수인 경우 그대로 출력
      console.log('[' + arr.join(',') + ']');
    }
  }
  index += 3; // 다음 tc로 넘어가기 위해 index 조정
}
