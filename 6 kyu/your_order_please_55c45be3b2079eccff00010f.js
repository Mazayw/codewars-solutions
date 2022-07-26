function order(words) {
  if (words.length === 0) return '';
  const arrayFromWords = words.split(' ');
  return arrayFromWords
    .sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0])
    .join(' ');
}