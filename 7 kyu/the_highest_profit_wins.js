function minMax(arr){
  const res = ['min', 'max'];
  res[0] = Math.min(...arr);
  res[1] = Math.max(...arr);
  return res
}