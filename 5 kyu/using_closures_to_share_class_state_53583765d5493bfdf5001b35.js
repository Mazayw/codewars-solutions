var Cat = (function () {
  const cats = [];
  const constructor = function (name, weight) {
    if (!name || !weight) throw Error('invalid parameters');
    Object.defineProperty(this, 'weight', {
      get: () => weight,
      set: (catWeight) => (weight = catWeight),
    });
    cats.push(this)
  };

  constructor.averageWeight = () => {
    return cats.reduce((acc, el) => acc + el.weight, 0) / cats.length;
   };
  return constructor;
})();