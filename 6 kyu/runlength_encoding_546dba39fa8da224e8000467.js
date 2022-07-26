var runLengthEncoding = function(str){
  const result = [];
  str.split[''];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] == str[i+1]){
      count++;
      i++;
    }
    result.push([count, str[i]]);
  }
  return result;
}