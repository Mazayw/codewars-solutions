function solution(str) {
  let strMod = str;
  const result = [];
  if (strMod.length % 2) strMod += '_';
  while (strMod) {
    result.push(strMod.slice(0, 2));
    strMod = strMod.slice(2);
  }
  return result;
}