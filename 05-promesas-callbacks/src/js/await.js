import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map((id) => buscarHeroe(id));

// Pro tip para que no se tarde mucho
// intentar poner los awaits fuera de los ciclos for, ... 
 const obtenerHeroesArr = async () => {
    //Todo el codigo en una linea
    return await Promise.all(heroesIds.map(buscarHeroe));
    // const heroesArr = [];

    // for (const id of heroesIds) {
    //     heroesArr.push(buscarHeroe(id));
    // }

    // return await Promise.all(heroesArr);
}

 const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);

        return heroe;

    } catch (error) {
        console.log('CATCH !!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };

    }
}



// manera clasica lenta 

//  const obtenerHeroesArr = async() => {
//     const heroesArr = [];

//     for (const id of heroesIds) {
//         const heroe = await buscarHeroe(id);
//         heroesArr.push(heroe)
//     }
//     return heroesArr;
// }


export const heroesCiclo=  async ()=>{
 
    console.time('HeroesCiclo');
 
     //heroesPromesas.forEach( async(p) => console.log( await p ));
 
    //no acaba de funcionar, solo se espera si paso el await dentro del console.log(await heroe)
     for await( const heroe of heroesPromesas ) {
         console.log(heroe);
    }
 
    
    
    console.timeEnd('HeroesCiclo');
 
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) );
}
export const heroesIfAwait = async(id)=>{
    
    
    //if await si que funciona
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaaaa');
    }
} 
 
