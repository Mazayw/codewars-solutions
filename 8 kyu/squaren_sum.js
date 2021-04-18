function squareSum(numbers){
return Array.from(numbers, x => x*x).reduce((a, b) => a + b, 0);
}
