function digitalRoot(n) {
    var final=0;
    var answer=[];
    while(n>10){
      answer.push(Math.floor(n%10))
      n=Math.floor(n/10)
    }
    for(var i = 0; i < answer.length; i++){
      final += answer[i];

    }

    if(final+n>10){
      digitalRoot(final)
    }
    else{

      final=(final + n%10)
    }
  return Math.floor(final)
  }

 console.log( digitalRoot(39))
