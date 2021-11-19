function recycle(array) {
  let paper = [], glass = [], organic = [], plastic = [];
  const result = [];
  function sorting(obj, mat) {
    if (obj.material == mat || obj.secondMaterial == mat) return obj.type;
  };
  paper = array.filter(obj => sorting(obj, 'paper')).map(el => el.type);
  glass = array.filter(obj => sorting(obj, 'glass')).map(el => el.type);
  organic = array.filter(obj => sorting(obj, 'organic')).map(el => el.type);
  plastic = array.filter(obj => sorting(obj, 'plastic')).map(el => el.type);
  result.push(paper, glass, organic, plastic)
  return result
}