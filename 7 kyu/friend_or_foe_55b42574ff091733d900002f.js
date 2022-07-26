function friend(friends){
  let myFriends = [];
for (let myFriend of friends) {
  if (myFriend.length == 4) {
    myFriends.push(myFriend);
  }
}  
 return myFriends;
}
