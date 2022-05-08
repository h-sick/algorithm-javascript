function solution(fees, records) {
  const [baseTime, basePrice, unitTime, unitPrice] = fees;

  const getParkingTime = (time1, time2) => {
    if (!time2) time2 = '23:59';
    const [h1, m1] = time1.split(':').map(Number);
    const [h2, m2] = time2.split(':').map(Number);
    return (h2 - h1) * 60 + m2 - m1;
  };

  const getParkingPrice = parkedTime => {
    let price = basePrice;
    if (parkedTime > baseTime)
      price += Math.ceil((parkedTime - baseTime) / unitTime) * unitPrice;
    return price;
  };

  const times = {};
  for (const record of records) {
    const [time, number, desc] = record.split(' ');
    if (!times[number]) times[number] = [];
    if (desc === 'IN') times[number].push([time, null]);
    if (desc === 'OUT') times[number][times[number].length - 1][1] = time;
  }

  const prices = {};
  Object.keys(times).forEach(carNumber => {
    let accParkedTime = 0;
    times[carNumber].forEach(time => {
      accParkedTime += getParkingTime(time[0], time[1]);
    });
    prices[carNumber] = getParkingPrice(accParkedTime);
  });

  return Object.entries(prices)
    .sort((a, b) => +a[0] - +b[0])
    .map(([carNumber, price]) => price);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
); // [14600, 34400, 5000]
console.log(
  solution(
    [120, 0, 60, 591],
    [
      '16:00 3961 IN',
      '16:00 0202 IN',
      '18:00 3961 OUT',
      '18:00 0202 OUT',
      '23:58 3961 IN',
    ]
  )
); // [0, 591]
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'])); // 	[14841]
