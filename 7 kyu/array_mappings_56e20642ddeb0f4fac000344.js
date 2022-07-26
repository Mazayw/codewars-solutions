Array.prototype.map = function (process) {
  const arr = this;
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(process(arr[i]));
  }
  return result;
};