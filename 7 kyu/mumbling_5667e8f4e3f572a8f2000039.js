function accum(s) {
s = s.toUpperCase().split('');
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i]+s[i].toLowerCase().repeat(i);
  }
  return s.join('-');
}

