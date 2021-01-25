function primeFinder(n){
    let iteration, flag = true;

    if(n == 0){
        flag = false;
    }

    else if(n == 1){
        flag = false;
    }

    else{
        for(iteration = 2; iteration < n; iteration++){
            if(n % iteration == 0){
                flag = false;
                break;
            }
        }
    }
    
    return flag;
}

const num = 1;
let isPrime = primeFinder(num);

if(isPrime == false){
    console.log(num + ' is not a prime number.');
}
else{
    console.log(num + ' is a prime number.');
}