function solution(str) {
  const result = [];
  for (let i = str.length; i >= 0; i--) {
    result.push(str.charAt(i));
  }
  return result.join('');
}
