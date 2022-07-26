function head(array){
  return array[0];
};

function tail(array){
  return array.slice(1);
};

function init(array) {
  return array.slice(0, array.length-1);
};

function last(array){
  return array[(array.length-1)];
};