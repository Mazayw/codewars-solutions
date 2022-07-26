function myLanguages(results) {
return Object.entries(results).filter(m => m[1] >= 60).sort((a,b) => b[1]-a[1]).map(el => el[0]);
}