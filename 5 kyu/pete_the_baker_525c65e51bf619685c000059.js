function cakes(recipe, available) {
  // TODO: insert code
let numberCakes ;
   for (let key in recipe) {
    let howMany = (recipe[key] && available[key])>0 ? parseInt(available[key]/recipe[key]) : 0;
    numberCakes = numberCakes<howMany ? numberCakes : howMany;
  }
  return (numberCakes);
}