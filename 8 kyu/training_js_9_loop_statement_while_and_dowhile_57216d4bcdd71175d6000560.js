function padIt(str, n) {
  let count = n;
  let result = str;
  while (count !== 0) {
    if (count % 2 !== 0) {
      result = '*' + result;
    } else {
      result = result + '*';
    }
    count--;
  }
  return result;
}