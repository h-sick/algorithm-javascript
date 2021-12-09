const makeCombination = (courseCount, allMenus) => {
  const customCourses = [];
  const temp = [];
  const makeMenus = (count, start) => {
    if (count === courseCount) {
      customCourses.push([...temp]);
      return;
    }
    for (let i = start; i < allMenus.length; i++) {
      temp.push(allMenus[i]);
      makeMenus(count + 1, i + 1);
      temp.pop();
    }
  };
  makeMenus(0, 0);
  return customCourses;
};

function solution(orders, course) {
  const countOrders = {};
  for (const order of orders) {
    for (const menu of order) {
      countOrders[menu] = countOrders[menu] ? countOrders[menu] + 1 : 1;
    }
  }
  const allMenus = [];
  for (const menu of Object.keys(countOrders).sort()) {
    if (countOrders[menu] >= 2) allMenus.push(menu);
  }

  const result = [];
  for (const courseCount of course) {
    if (courseCount > result[result.length - 1]) {
      let hasPartCourse = false;
      for (const addedCourse of result) {
        if (courseCount.join('').indexOf(addedCourse) !== -1) {
          hasPartCourse = true;
          break;
        }
      }
      if (!hasPartCourse) continue;
    }
    const customCourses = makeCombination(courseCount, allMenus);

    let bestOrdered = [];
    let maxOrderCount = 0;
    for (const customCourse of customCourses) {
      let orderAllMenuOfCourse = 0;
      for (const order of orders) {
        let ordered = true;
        for (const menu of customCourse) {
          if (order.indexOf(menu) === -1) {
            ordered = false;
            break;
          }
        }
        if (ordered) orderAllMenuOfCourse++;
      }
      if (orderAllMenuOfCourse >= 2) {
        if (maxOrderCount > orderAllMenuOfCourse) continue;
        if (maxOrderCount === orderAllMenuOfCourse)
          bestOrdered.push(customCourse.join(''));
        if (maxOrderCount < orderAllMenuOfCourse) {
          bestOrdered = [customCourse.join('')];
          maxOrderCount = orderAllMenuOfCourse;
        }
      }
    }
    while (bestOrdered.length) result.push(bestOrdered.shift());
  }
  return result.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
);
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
);
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
