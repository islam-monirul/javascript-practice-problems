function getMax(a,b,c){
  if(a == b && b == c && c == a){
    return -1;
  }

  if(a > b){
    if(a > c){
        return a;
    }
    else{
        return c;
    }
  }

  else{
    if(b > c){
      return b;
    }
    else{
      return c;
    }
  }

}


const a = 4, b = 4, c = 4;
console.log("Three values are : ", a, b, c);
let result = getMax(a,b,c);
if(result == -1){
  console.log("All equal.");
}

else{
  console.log(result + " is bigger.");
}
