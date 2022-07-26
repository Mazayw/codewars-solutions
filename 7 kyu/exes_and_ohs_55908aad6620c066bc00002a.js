function XO(str) {
  str = str.toLowerCase();
  return (str.split('').filter(word => word == [... new Set(str)][0]).length) === (str.split('').filter(word => word == [... new Set(str)][1]).length) ? true : false;
}
