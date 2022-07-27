function once(fn) {
  let once = false;
  return function (...args) {
    if (!once) {
      once = true;
      return fn.apply(this, args);
    }
  };
}