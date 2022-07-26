function DNAStrand(dna) {
  const result = [];
  dna.split('').forEach((el) => {
    switch (el) {
      case 'A':
        el = 'T';
        break;
      case 'T':
        el = 'A';
        break;
      case 'C':
        el = 'G';
        break;
      case 'G':
        el = 'C';
        break;
      default:
        el = el;
    }
    result.push(el);
  });
  return result.join('');
}