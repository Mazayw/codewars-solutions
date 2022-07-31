const cache = (fn) => {
  const mem = {};
  return (...arg) => {
    const key = JSON.stringify(arg);
    if (!mem.hasOwnProperty(key)) {
      mem[key] = fn.apply(null, arg);
    }
    return mem[key];
  };
};

