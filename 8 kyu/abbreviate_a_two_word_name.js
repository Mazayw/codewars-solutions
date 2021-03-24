function abbrevName(name){
let splitName = name.split(' ');
 return splitName[0].slice(0,1).toUpperCase() +'.'+ splitName[1].slice(0,1).toUpperCase()
}