// import {  buscarHeroe, buscarHeroeAsync  } from "./js/promesas";
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo ,heroesIfAwait} from "./js/await";
import'./styles.css';
heroesIfAwait('iron');
heroesCiclo();
//async solo

// buscarHeroe('capi2')
// .then(heroe => console.log(heroe))
// .catch( console.warn);

// buscarHeroe('iron')
// .then(heroe => console.log(heroe))
// .catch( console.warn);



/// async Await
// console.time('await');

// obtenerHeroeAwait('capi2').then(heroe=>{
//     console.log(heroe);
//     console.timeEnd('await');
// });


