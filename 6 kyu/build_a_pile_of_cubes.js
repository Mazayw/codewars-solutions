function findNb(m) {
    let n=1
    let i=0
  while    (i<m){
  i=i+Math.pow(n++,3)}
    return (i==m ? n-1 : -1);
}
