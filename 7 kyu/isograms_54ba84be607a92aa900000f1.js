function isIsogram(str){
  str = str.toLowerCase();
  const strArr = str.split('');
  const strSet = new Set(strArr);
  if (str.length == 0) {
    return true;
  }
  if (str.length != strSet.size) {
      return false;
  }
  else {
    return true;
 } 
}