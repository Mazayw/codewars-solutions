function duplicateEncode(word){
word = word.toLowerCase().split('');
return word.map((a) => {
  if (word.indexOf(a) === word.lastIndexOf(a)) {
    return '(';
  }  else { 
    return ')';
  }
}).join('');
 }


