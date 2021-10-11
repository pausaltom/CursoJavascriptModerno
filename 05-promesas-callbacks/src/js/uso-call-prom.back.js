import { buscarHeroe as buscarHeroeCallback } from './js/callbacks.js'
import { buscarHeroe } from './js/promesas.js';
import'./styles.css';

const heroeid1 = 'capi2';
const heroeid2 = 'iron';
const heroeid3 = 'spider';
//const idsHeroes = ['capi2','iron','spider','capi']

// buscarHeroe( heroeid1, (err, heroe1 )=>{
//     if (err) {return  console.error(err); }

//     buscarHeroe(heroeid2, (err, heroe2)=>{
//         if (err) {return  console.error(err); }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
        
//     });



// });


///Promesas 
    // buscarHeroe(heroeid1).then( heroe => {
    //     console.log(`Enviando a ${heroe.nombre} a la misión`);
    //     buscarHeroe(heroeid2).then( heroe => {
    //         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
            
    //     });    
    // });

//Promise all: si una promesa falla no se ejecuta nada, solo sirven si todas las promesas funcionan
// El .finally() siempre se ejecuta
Promise.all([buscarHeroe(heroeid1), buscarHeroe(heroeid2)])
.then(([heroe1,heroe2])=>{
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch(err =>{
    alert(err)
}).finally(()=>{
    console.log('Se termino el Promise.all');
});


console.log('Fin del Programa');
