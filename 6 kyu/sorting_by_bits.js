function sortByBit(arr) {
    const funcBits = function(num) {
      const bits = num.toString(2).match(/1/g);
        return bits ? bits.length : 0;
    }
    return arr.sort((a, b) => funcBits(a) - funcBits(b) || a - b);
  }