// function solution(n, times) {
//   times.sort((a, b) => a - b);

//   let left = times[0];
//   let right = times[times.length - 1] * n;

//   let minTime = right;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     let ablePeopleWhileMid = 0;
//     for (const time of times) {
//       ablePeopleWhileMid += Math.floor(mid / time);
//       if (ablePeopleWhileMid >= n) {
//         minTime = Math.min(mid, minTime);
//         break;
//       }
//     }

//     if (ablePeopleWhileMid >= n) right = mid - 1;
//     else left = mid + 1;
//   }
//   return minTime;
// }

console.log(solution(6, [7, 10])); // 28

function solution(n, times) {
  times.sort((a, b) => a - b);

  let [left] = times;
  let right = times[times.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log({ left, right, mid });

    let pass = 0;
    for (const time of times) {
      pass += Math.floor(mid / time);
      if (pass >= n) {
        break;
      }
    }

    if (pass >= n) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}
