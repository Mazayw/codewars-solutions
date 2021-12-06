function unluckyDays(year){
  let count = 0;
  for (let i = 0; i < 12; i++){
   let date = new Date(year, i, 13);
    if (date.getDay() == 5) count++;
  };
  return count;
};