function nthFibo(n) {
 const number = [0];
  for (let i = 1; i <= (n); i++){
    (i === 1 ? number.push(1) : number.push(number[i-1]+number[i-2])); 
  };
  return number[n-1];
}