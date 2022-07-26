function longest(s1, s2) {
  let s3 = (s1+s2).split('').sort();
  let longest = new Set(s3);
  return ([...longest].join(''));
}