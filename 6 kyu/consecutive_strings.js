function longestConsec(strarr, k) {
 if (strarr.length==0 || k>strarr.length || k<=0){
    return "";
  }else{
      var list =[];
      for (var i=0;i<strarr.length-k+1;i++)
        {
          list[i]=strarr.slice(i,k+i).join('');
         }

      var longest = list.reduce(function (a, b) { return a.length >= b.length ? a : b; });
      return longest;
}
}

 