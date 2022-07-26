function createSecretHolder(secret) {
 return {
getSecret: function(){
  return secret;
  },
setSecret: function(num){
    secret = num;
  }
   };
};