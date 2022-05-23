function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  let executionTime = 0;
  const cache = [];
  for (let city of cities) {
    city = city.toLowerCase();
    const cityIndex = cache.indexOf(city);
    if (cityIndex > -1) {
      if (cityIndex !== cacheSize - 1) {
        cache.splice(cityIndex, 1);
        cache.push(city);
      }
      executionTime += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      executionTime += 5;
    }
  }
  return executionTime;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
); // 50
console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
); // 21
console.log(
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
); // 60
console.log(
  solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
); // 52
console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])); // 16
console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])); // 25
