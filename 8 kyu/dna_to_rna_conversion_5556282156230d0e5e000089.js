function DNAtoRNA(dna) {
  return dna.split('').map(x => x == 'T' ? x = 'U' : x).join('');
  // create a function which ;returns an RNA sequence from the given DNA sequence
}