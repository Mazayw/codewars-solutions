function reverseWords(str) {
const strArray = str.split(' ');
  for (let i = 0; i < strArray.length; i++ ) {
    strArray[i] = strArray[i].split('').reverse().join('');
  }
  return strArray.join(' ');
}