const personaje= {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat : 34.034,
        lng : -118.70
    },
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880 , 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War'
};
console.log(personaje);

console.log('Nombre: ', personaje.nombre);
console.log('codeName: ', personaje['codeName']);
console.log('Edad: ', personaje.edad);

console.log('Cords: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

//Ejercicio: Cuantos trajes tiene Ironman?

console.log('Trajes ', personaje.trajes);
console.log('No. Trajes ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[personaje.trajes.length-1]);

const x= 'vivo';

console.log('Vivo: ', personaje[x]);

//En caso de querer poner un 
//nombre de variable con espacio o simbolo - hay que ponerlo entre comillas
//estas variables o elementos de objetos, no se van a poder usar con ej: personaje.ultima pelicula
console.log('última pelicula: ', personaje["ultima pelicula"]);

//Más detalles 

personaje.edad = null;
console.log(personaje.edad);

delete personaje.edad
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Bloquear los objetos para que no se puedan cambiar las propiedades 
//Si que se pueden modificar valores de los objetos de dentro de el objeto
//No es recursive
Object.freeze(personaje);
personaje.edad= 98;
personaje.dinero=20000000000;
personaje.direccion.ubicacion='Costa Rica'
console.log(personaje);

//Para encontrar todas propiedades de un objeto

let propiedades = Object.getOwnPropertyNames(personaje);
let valores = Object.values(personaje);
console.log({propiedades, valores});
