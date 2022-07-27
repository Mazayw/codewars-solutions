function printerError(s) {
    // your code
let goodSymbols=("abcdefghijklm");
let count=0;
for (let i=0; i<s.length; i++) {
if (goodSymbols.indexOf(s[i])===-1) {count++};
}
return (count+'/'+s.length)
}