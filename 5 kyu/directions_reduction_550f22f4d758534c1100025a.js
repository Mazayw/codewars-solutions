function dirReduc(arr) {
  const opDirections = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    if (opDirections[result[i]] === result[i + 1]) {
      result.splice(i, 2);
      i = -1;
    }
  }
  return result;
}