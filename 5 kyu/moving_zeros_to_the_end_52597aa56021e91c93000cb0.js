function moveZeros(arr) {
  const result = [];
  let zeroCount = [];
  arr.forEach((element) => {
    if (element === 0) {
      zeroCount.push(0);
    } else {
      result.push(element);
    }
  });
  return result.concat(zeroCount);
}