function getSum( a,b )
{
   const minNumber = Math.min(a,b);
   const maxNumber = Math.max(a,b);
   const numAll = [];
   for (let iterator = minNumber; iterator >= minNumber && iterator <= maxNumber; iterator++){
    numAll.push(iterator);
    }
  return numAll.reduce((a,b) => a+b, 0); 
}