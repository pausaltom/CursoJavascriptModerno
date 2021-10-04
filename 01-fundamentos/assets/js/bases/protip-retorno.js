// function crearPersona(nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
    
// }
/*
const crearPersona2= (nombre, apellido)=> ({nombre,apellido});
    
    


//const persona = crearPersona('Pau','Saltó');
const persona = crearPersona2('Pau','Saltó');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
     
}
const imprimeArgumentos2 = (nombre, ...args)=> {
    //console.log({nombre,args});
    return args;
     
}

const [apellido, edad, vivo] = imprimeArgumentos2("Pau","Saltó",21,true);

console.log({apellido, edad, vivo});

const {apellido: nuevoApellido} = crearPersona2('Fernando', 'Herrera');

console.log({nuevoApellido});
*/
const tony= {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
   //edad: 40,
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
};

const imprimePropiedades= ({nombre, codeName,vivo,edad=18,trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
       
}

imprimePropiedades(tony);