
class Persona {
    // Esto se hace porque en js no se pueden crear mas de un constructor por clase
    static porObjeto({nombre , apellido, pais}){
        return new Persona(nombre, apellido, pais);
    } 




    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais} `);
        
    }
}

const nombre1 = 'Melissa',
        apellido1= 'Flores',
        pais1= 'Honduras';
const fHer= {
    nombre : 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}
const pers1 = new Persona(nombre1,apellido1,pais1);
pers1.getInfo();
const pers2 = Persona.porObjeto(fHer);
pers2.getInfo();