var number = function(busStops){
  return busStops.reduce((previousValue, currentValue) => previousValue + (currentValue[0]-currentValue[1]), 0);
}