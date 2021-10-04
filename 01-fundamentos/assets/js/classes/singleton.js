

class Singleton {
    static instancia;//undefined
    nombre = '';
    // la !!Singleton.instancia es porque la negación de null o undefined es TODO: true!!!!!
    constructor(nombre = ''){

        
        if (!!Singleton.instancia) {
           return Singleton.instancia;
        }
         Singleton.instancia= this;
        this.nombre = nombre;

        
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('SpiderMan');
const instancia3 = new Singleton('Thor');
console.log(`El Nombre de la instancia1 es ${instancia1.nombre}`);
console.log(`El Nombre de la instancia2 es ${instancia2.nombre}`);
console.log(`El Nombre de la instancia3 es ${instancia3.nombre}`);
