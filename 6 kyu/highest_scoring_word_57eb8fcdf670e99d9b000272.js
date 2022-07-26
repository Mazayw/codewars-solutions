function high(x){

  function sumWord(word){
    let score = 0;
    for (let i = 0; i < word.length; i++){
      score = score + word.charCodeAt(i)-96;
    }
    return score;
  }
  
 x = x.split(' ');
  let highScoreString = '';
  
  for (let i = 0; i < x.length; i++){
    const wordScore = sumWord(x[i]);
    sumWord(highScoreString) < sumWord(x[i]) ? highScoreString = x[i] : highScoreString = highScoreString;
   }
  return highScoreString;
}
