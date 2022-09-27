function gimme(triplet) {
  const arr = [...triplet].sort((a, b) => a - b);
  return triplet.findIndex((el) => el === arr[1]);
}