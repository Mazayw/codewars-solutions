function explode(s) {
  const sArr = s.split('');
  return sArr.map(element => element.repeat(element)).join('')
}