function findUniq(arr) {
  arr.sort();
  return arr[0] == arr[1] ? [... new Set(arr)][1] : arr[0] ;
}


//const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));