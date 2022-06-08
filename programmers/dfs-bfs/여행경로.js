function solution(tickets) {
  const routes = {};
  tickets.forEach(([from, to]) => {
    if (!routes[from]) routes[from] = [];
    routes[from].push(to);
  });

  const keys = Object.keys(routes);
  const leftTickets = {};
  keys.forEach(key => {
    routes[key].sort();
    routes[key].forEach(to => {
      if (!leftTickets[key]) leftTickets[key] = {};
      leftTickets[key][to] = (leftTickets[key][to] || 0) + 1;
    });
  });

  let answer;
  const dfs = (from, temp) => {
    if (answer) return;
    if (temp.length === tickets.length + 1) {
      answer = temp;
      return;
    }
    if (!routes[from]) return;

    for (const to of routes[from]) {
      if (leftTickets[from][to] === 0) continue;
      leftTickets[from][to] -= 1;
      dfs(to, [...temp, to]);
      leftTickets[from][to] += 1;
    }
  };
  dfs('ICN', ['ICN']);
  return answer;
}

console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
); // 	["ICN", "JFK", "HND", "IAD"]
console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
