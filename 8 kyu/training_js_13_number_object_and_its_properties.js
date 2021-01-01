function whatNumberIsIt(n){
  if (Number.isNaN(n)) return 'Input number is Number.NaN';
  if (Number.isSafeInteger(n)) return `Input number is ${n}`;
  if (n === Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE';
  if (n === Number.MIN_VALUE) return 'Input number is Number.MIN_VALUE';
  if (n === Number.NEGATIVE_INFINITY) return 'Input number is Number.NEGATIVE_INFINITY';
  if (n === Number.POSITIVE_INFINITY) return 'Input number is Number.POSITIVE_INFINITY';
}

