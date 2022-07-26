function squareDigits(num){
  let square='';
 for (let char of num.toString()) {
    square = square + char*char; 
}
  return (parseInt(square));
}

