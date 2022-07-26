function solution(number){
  if (number < 3) return 0;
let numbers = [];
  for (let i = 1; i < number; i++){
    if ((i % 3 == 0) || (i % 5 == 0)) numbers.push(i) 
  }
const multiple = numbers.reduce((a, b) => a + b, 0);
return multiple;
}