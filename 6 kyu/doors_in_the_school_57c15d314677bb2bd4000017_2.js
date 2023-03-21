function doors(n){
  let doors = new Array(n).fill(false);
  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j < n; j += i) {
      doors[j] = !doors[j];
    }
  }
  return doors.filter(door => door).length;
}