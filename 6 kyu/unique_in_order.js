var uniqueInOrder = function (iterable) {
  let iterableArr = iterable
  if (typeof iterable === 'string') iterableArr = iterable.split('');
  return iterableArr.reduce((acc, el, index) => {
    if (el !== iterableArr[index - 1]) acc.push(el);
    return acc;
  }, []);
};