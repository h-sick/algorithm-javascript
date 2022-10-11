function solution(k, room_number) {
  const rooms = new Map();
  const assignRooms = (num) => {
    if (!rooms.has(num)) {
      rooms.set(num, num + 1);
      return num;
    }
    const nearestRoom = assignRooms(rooms.get(num));
    rooms.set(num, nearestRoom + 1);
    return nearestRoom;
  };

  return room_number.map(assignRooms);
}

console.log(solution(10, [1, 3, 4, 1, 3, 1])); // [1,3,4,2,5,6]
