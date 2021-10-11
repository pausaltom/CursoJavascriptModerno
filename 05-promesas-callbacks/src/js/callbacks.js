const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Absurda inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a las picaduras de araña'
    },
}

export const buscarHeroe = (id, callback)=>{
    const heroe = heroes[id];
    
    if (heroe) {
        //hay que poner null al principio pq el err va primero en el callback
        callback(null, heroe);
    } else {
        //si hay un error
       callback(`No existe un héroe con el id: ${id}`);
    }
    
}