
class Persona {

    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + ' instáncias creadas';
    }
    static mensaje() {
        console.log('Hola a todos, soy un método estático');

    }



    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin código',
        frase = 'Sin frase') {
        console.log('Hola!');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        //No poner this_conteo pq haria referencia a la instancia 
        //y no a la clase en general
        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();

    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;

    }



    quienSoy() {
        console.log(`Soy ${this.codigo}, y mi identidad es : ${this.nombre}`);
    }
    miFrase() {
        this.quienSoy();
        console.log(`Soy ${this.codigo}, y mi frase es : ${this.frase}`);

    }

}

class Heroe extends Persona{
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase,clan){
        super(nombre,codigo,frase);

        this.clan=clan;
    }
    quienSoy() {
        console.log(`Soy ${this.nombre}, y mi clan es : ${this.clan}`);
        super.quienSoy();
    }
}


 const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy el hombre araña','Los Avengers');
//const spiderman = new Heroe();
console.log(spiderman);

spiderman.quienSoy();

