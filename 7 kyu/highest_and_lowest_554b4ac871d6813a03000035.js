function highAndLow(numbers){
const numbersArr = numbers.split(` `);
  return (Math.max(...numbersArr) + ` ` + Math.min(...numbersArr));
}