function validateWord(s)
{
const newString = s.toLowerCase().split('');
const sSet = new Set(newString);
const arrResult = [];

sSet.forEach(el=>{
const lengthEl = newString.filter(strEl => strEl === el).length;
arrResult.push(lengthEl);
})
  const result = new Set(arrResult);
  console.log(result.size)
  if (result.size <= 1) {
    return true;
  } else{
    return false;
  }
}
  
