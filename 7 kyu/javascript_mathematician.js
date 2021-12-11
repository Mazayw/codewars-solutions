
  const calculate = (...first) => (...second) => {
    return [].concat(first, second).reduce((a, b) => a + b, 0);
  }
