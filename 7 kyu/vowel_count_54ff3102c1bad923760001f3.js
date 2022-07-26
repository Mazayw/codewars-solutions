function getCount(str) {
  return str.match(/[a,e,i,o,u]/g) ? str.match(/[a,e,i,o,u]/g).length : 0;
}
