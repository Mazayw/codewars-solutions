function getParticipants(handshakes){
  let farmers = 1;
  while (handshakes > ((farmers*(farmers-1))/2)){
  farmers++;
  };
 return farmers;
}