function doors(n) {
  let doorsArr = new Array(n).fill(false);
  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j < n; j += i) {
      doorsArr[j] = !doorsArr[j]; 
    }
  }
  return doorsArr.filter(door => door).length;
}