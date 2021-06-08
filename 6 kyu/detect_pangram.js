function isPangram(string){
  let letters = new Set(string.toLowerCase().split('').filter(char => /[a-zA-Z]/.test(char)));
  return letters.size == 26 ? true : false;
}

