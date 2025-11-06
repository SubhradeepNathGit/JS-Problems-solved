// prime check
function checkPrime(num) {
    
    if (num < 2) return false;

    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false; 
        }
        i++;
    }

    return true; 
}


console.log(checkPrime(1));  
console.log(checkPrime(13));  
console.log(checkPrime(25));  

