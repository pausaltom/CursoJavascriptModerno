let juegos = ['Zelda','Mario', 'Metroid','Chrono'];
console.log('Largo',juegos.length);

let primero= juegos[0];
let ultimo= juegos[juegos.length-1];
console.log(`primero: ${primero}, ultimo: ${ultimo}`);

juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
    
});
let newLength= juegos.push('F-Zero');
console.log({newLength, juegos});

newLength= juegos.unshift('Fire Emblem');

console.log({newLength, juegos});

let ultimoJuego= juegos.pop();
console.log('ultimo: '+ultimoJuego);

let pos= 1;

let juegosBorrados= juegos.splice(pos, 2)
console.log({juegosBorrados, juegos});

let MetroidIndex= juegos.indexOf('metroid');
//case Sensitive, cuando no encuentra la palabra devuelve -1
console.log({MetroidIndex});
