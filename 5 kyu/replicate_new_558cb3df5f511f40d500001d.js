function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  if (
    (typeof result === 'object' || typeof result === 'function') &&
    result !== null
  ) {
    return result;
  }
  return instance;
}