

class Rectangulo { 
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base= base;
        this.altura= altura;

        this.#area = base*altura;
    }
}

// canIuse.com esto solo funciona en proximas actualizaciones de JS, en chrome funciona
const res = new Rectangulo(10, 15);

console.log(res);
