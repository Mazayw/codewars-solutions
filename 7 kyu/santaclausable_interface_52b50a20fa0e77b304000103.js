function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every((el) => {
    return typeof obj[el] == 'function';
  });
}
