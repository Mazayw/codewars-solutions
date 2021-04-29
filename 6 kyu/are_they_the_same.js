function comp(array1, array2){
  return array2 ==null || array1 == null ?
  false
  :
  array1.map(x => x*x).sort((a, b) => a - b).toString() == array2.sort((a, b) => a - b).toString() ? true : false;

}

