
const fher = {
    nombre: 'Fernando',
    edad:30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);       
    }
}
const pedro = {
    nombre: 'Pedro',
    edad:15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);       
    }
}

// fher.imprimir();

function Persona(nombre, edad) {
    console.log('hola linea');

    this.nombre = nombre;
    this.edad = edad;
    
    this.imprimir= function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);       
    }
}
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);

maria.imprimir();
melissa.imprimir();