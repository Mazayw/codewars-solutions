function deepCount(a){
  let i = 0;
  function count(b){
    for (element of b){
      if (Array.isArray(element)) {
        count(element);
       i++;
     } else i++;
     } 
  }
  count(a);
  return i;
}