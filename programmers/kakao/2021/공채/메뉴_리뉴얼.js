function solution(orders, course) {
  orders = orders.map(order => order.split('').sort().join(''));

  const limit = course[course.length - 1];
  const counts = Array.from({ length: limit + 1 }, () => ({}));

  const getCombination = (order, start, combi) => {
    if (combi.length > limit) return;
    if (course.includes(combi.length)) {
      counts[combi.length][combi] = (counts[combi.length][combi] || 0) + 1;
    }

    for (let i = start; i < order.length; i++) {
      getCombination(order, i + 1, combi + order[i]);
    }
  };

  orders.forEach(order => {
    getCombination(order, 0, '');
  });

  const result = [];
  course.forEach(courseCount => {
    let max = 0;
    let populars = [];
    for (const [menu, count] of Object.entries(counts[courseCount])) {
      if (count < 2) continue;
      if (count === max) populars.push(menu);
      if (count > max) {
        populars = [menu];
        max = count;
      }
    }
    populars.forEach(menu => result.push(menu));
  });
  return result.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])); // 	["WX", "XY"]
