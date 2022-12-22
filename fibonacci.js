// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.time('rFib');
rFib(20);
console.timeEnd('rFib');
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.time('iFib');
iFib(20);
console.timeEnd('iFib');

/**
 * 
 * Determina si la función de Fibonacci iterativa o recursiva es más rápida
 * En este caso la funcion iterativa es más rapido ya que no depende de la recursividad, es decir
 * No espera a que se cumplan las funciones anteriores para ir acumulando.
 */