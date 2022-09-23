function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  return input.reduce(
    (acc, el) => {
      el > 0 ? (acc[0] = acc[0] + 1) : (acc[1] = acc[1] + el);
      return acc;
    },
    [0, 0]
  );
}