function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  }
  if (n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}