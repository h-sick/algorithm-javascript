function solution(priorities, location) {
  const prioritiesWithOrder = priorities.map((priority, i) => [priority, i]);

  const prints = [];
  while (prioritiesWithOrder.length) {
    const postDoc = prioritiesWithOrder.shift();
    // console.log({ prints, postDoc, prioritiesWithOrder });

    let isBiggerExist = false;
    for (const [priority] of prioritiesWithOrder) {
      if (priority > postDoc[0]) {
        isBiggerExist = true;
        prioritiesWithOrder.push(postDoc);
        break;
      }
    }
    if (isBiggerExist) continue;
    prints.push(postDoc);
    if (postDoc[1] === location) return prints.length;
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
