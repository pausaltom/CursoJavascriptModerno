
class Persona {

    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' instáncias creadas';
    }
    static mensaje(){
        console.log('Hola a todos, soy un método estático');
        
    }



    nombre = '';
    codigo = '';
    frase = '';
    comida= '';

    constructor(nombre= 'Sin Nombre', codigo= 'Sin código',
     frase= 'Sin frase') {
        console.log('Hola!');
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        //No poner this_conteo pq haria referencia a la instancia 
        //y no a la clase en general
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida=comida.toUpperCase();
        
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
        
    }



    quienSoy() {
        console.log(`Soy ${this.codigo}, y mi identidad es : ${this.nombre}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`Soy ${this.codigo}, y mi frase es : ${this.frase}`);
        
    }

}

const spiderman = new Persona('Peter Parker','Spiderman','Soy el hombre araña');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
Persona._conteo = 2;
//console.log( ironman );
//console.log( spiderman.miFrase() );

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
console.log(spiderman.getComidaFavorita);

console.log('Conteo estático: ', Persona.getConteo);
Persona.mensaje();
Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log({Persona});



