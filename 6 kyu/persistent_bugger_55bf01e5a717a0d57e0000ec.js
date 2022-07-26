function persistence(num) {
num = num.toString().split('');
let i = 0;
while (num.length > 1) {
 num = num.reduce((a, b) => a * b);
 num = num.toString().split('');
i++;
}
  return i;
}
