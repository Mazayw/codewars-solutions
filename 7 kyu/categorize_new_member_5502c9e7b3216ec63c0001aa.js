function openOrSenior(data){
return data.map((a) => {
  if (a[0]>54 && a[1]>7) {
    return 'Senior';
  } else {
    return 'Open';
  }
});
}



