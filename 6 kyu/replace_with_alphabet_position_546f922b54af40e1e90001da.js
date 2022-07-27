function alphabetPosition(text) {
 text=text.toLowerCase(text);
text=text.replace(/[^a-z]+/g, '');
 let stringResult='';
for (let i=0; i<text.length; i++) {
let textNumber=text.codePointAt(i)-96
stringResult+=' '+textNumber;}
return stringResult.trim()

}