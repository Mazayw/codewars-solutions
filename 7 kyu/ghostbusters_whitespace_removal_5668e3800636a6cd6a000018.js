function ghostBusters(building) {
  if (!building.includes(' '))
    return "You just wanted my autograph didn't you?";
  return building.split(' ').join('');
}