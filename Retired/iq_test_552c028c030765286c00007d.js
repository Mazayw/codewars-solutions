function iqTest(numbers){
let even=[]
let odd=[]
let numbersA = numbers.split(' ')
for (let i = 0; i < numbersA.length; i++) {
 if (numbersA[i]%2===0){
 even.push(numbersA[i])
 } 
 else {odd.push(numbersA[i])}
}
let result = (even.length < odd.length) ? even : odd;
return numbersA.indexOf(result[0])+1
}