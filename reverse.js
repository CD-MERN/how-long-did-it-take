const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
console.time('reverse')
const reversed1 = story.split("").reverse().join("");
console.timeEnd('reverse')


const reverse2 = '';
console.time('reverse2')
for (let index = story.length -1 ; index <= 0; index--) {
    reverse2 += story[index];
}
console.timeEnd('reverse2')


/**
 * El mismo caso que con la funcion fibonacci, las funciones join espera a que termine la funcion reverse y a su vez reverse espera
 * a que termine split para ejecutarse, eso hace demorar cierta cantidad de tiempo, en cambio el for toma el bucle y ya lo ejecuta directamente.
 */