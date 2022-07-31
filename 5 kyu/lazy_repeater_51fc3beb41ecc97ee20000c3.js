const makeLooper =
  (str, i = 0) =>
  () =>
    str[i++ % str.length];
