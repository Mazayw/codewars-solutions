// complete the function
function solution(string) {
  const regex = /[A-Z]/g;
  return string.replace(regex, ' $&')   
}
