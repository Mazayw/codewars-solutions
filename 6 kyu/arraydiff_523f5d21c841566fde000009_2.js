function arrayDiff(a, b) {
	let c=[];
for (let i=0; i<a.length; i++){
 if (b.indexOf(a[i],0)==-1) {
 c.push(a[i]);
 }
}
return c
}
