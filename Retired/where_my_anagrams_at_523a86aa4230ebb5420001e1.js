function anagrams(word, words) {
  const sorted = (str) => str.split('').sort().join('');
  return words.filter((el) => sorted(word) === sorted(el));
}