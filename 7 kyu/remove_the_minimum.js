function removeSmallest(numbers) {
  let numbersCopy = numbers.slice();
  numbersCopy.splice(numbersCopy.indexOf(Math.min(...numbersCopy)), 1);
  return numbersCopy;
 }

