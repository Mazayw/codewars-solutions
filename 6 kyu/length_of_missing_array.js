function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null) return 0;
  const arrMap = (arrayOfArrays || [])
  .map(item => item ? item.length : 0)
  .sort((a, b) => a-b);
  let arrMap1 = Array.from(arrMap);
  if (arrMap1.includes(0)) return 0;
  let number = 0;
  for (let i = 0; i < arrMap1.length - 1; i++) {
    if ((arrMap1[i+1]-arrMap1[i]) == 2) {
      number = arrMap[i] + 1;
      return number;
    };
    };
  return 0;
  };

