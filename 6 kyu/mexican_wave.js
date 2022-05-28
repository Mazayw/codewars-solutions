function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const word = str.split('');
    if (!!word[i].match(/\w/g)) {
      word[i] = word[i].toUpperCase();
      result.push(word.join(''));
    }
  }
  return result;
}