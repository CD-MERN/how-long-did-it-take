Number.prototype.isPrime = function() {
    for( let i=2; i <= Math.floor(Math.sqrt(this)); i++ ) {
        if( this % i === 0 ) {          
            return false;
        }
    }
    return true;
}

function calcPrime(max) {
    console.time('prime')
    let primeCount = 0;
    let num = 2; // por razones matemáticas, 1 se considera primo
    while( primeCount < max ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    console.log(`The ${max} prime number is ${num-1}`);
    console.timeEnd('prime')
}

calcPrime(1e4);
calcPrime(1e5);
calcPrime(1e6);






    