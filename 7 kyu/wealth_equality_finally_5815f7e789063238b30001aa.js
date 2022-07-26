function redistributeWealth(wealth) {
  wealth.fill(wealth.reduce((acc, el) => acc + el, 0) / wealth.length);
}