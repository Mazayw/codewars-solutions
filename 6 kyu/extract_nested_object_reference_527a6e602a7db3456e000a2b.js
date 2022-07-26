Object.prototype.hash = function (string) {
  const arr = string.split('.');
  return arr.reduce((prev, cur) => {
       return prev ? prev[cur] : prev;
  }, this);
};