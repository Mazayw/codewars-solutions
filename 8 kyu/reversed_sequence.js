const reverseSeq = n => {
  let reverseN = [];
  let i = n;
  while (reverseN.length < n)
    {
    reverseN.push(i);
      i--;
    }
  return reverseN;
};