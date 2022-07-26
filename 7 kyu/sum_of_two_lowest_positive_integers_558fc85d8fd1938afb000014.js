function sumTwoSmallestNumbers(numbers) {  
return numbers.sort((a, b) => a - b)[0]+numbers.sort((a, b) => a - b)[1];

}