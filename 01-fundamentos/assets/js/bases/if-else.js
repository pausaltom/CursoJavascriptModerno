

let a = 5;

if( a >= 10){//undefined, null, una asignación
    console.log('A es mayor o igual a 10');
    
}else{
    console.log('A es menor a 10');
    
}
// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();//0: domingo, 1: lunes ... 
console.log({dia});
// == solo dice si es igual, === comprueba si son iguales y tmb el tipo de dato
// if (dia === 0) {
//     console.log('Hoy es Domingo'); 
// } else if(dia === 1){
//     console.log('Hoy es Lunes');
// }
// else if(dia === 2){
//     console.log('Hoy es Martes');
// }else if(dia === 3){
//     console.log('Hoy es Miercoles');
// }else if(dia === 4){
//     console.log('Hoy es Jueves');
// }else if(dia === 5){
//     console.log('Hoy es Viernes');
// }else{
//     console.log('Hoy es Sabado');
// }

const diasSemana ={
0:'Domingo',
1:'Lunes',
2:'Martes',
3:'Miercoles',
4:'Jueves',
5:'Viernes',
6:'Sabado',
};
dia=47;
console.log(diasSemana[dia] ||'Día no válido');


// const diasSemana ={
// 0: ()=> 'Domingo- 0',
// 1: ()=> 'Lunes- 1',
// 2: ()=> 'Martes- 2',
// 3: ()=> 'Miercoles- 3',
// 4: ()=> 'Jueves- 4',
// 5: ()=> 'Viernes- 5',
// 6: ()=> 'Sabado- 6',
// };
// dia=1;
// console.log(diasSemana[dia]() );

