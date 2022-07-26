function digitize(n) {
return Array.from(n.toString(),num => Number(num)).reverse();
}