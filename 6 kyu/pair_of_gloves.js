function numberOfPairs(gloves){
  let pairs = 0;
  let glSet = new Set(gloves);
  for (let item of glSet){
    pairs += Math.trunc(gloves.filter(a => a == item).length/2);
  };
  return pairs;
}