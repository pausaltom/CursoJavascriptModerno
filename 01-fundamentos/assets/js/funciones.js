//Todas las funciones tradicionales("que usas la instancia function")
//tienen un objeto interno arguments, este muestra todos los argumentos 
//que se han mandado a la funcion


function saludar(nombre) {
    console.log(arguments);

    console.log('Hola ' + nombre);

}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);

}
const saludarFlecha = () => {
    console.log('Hola Flecha');

}
const saludarFlecha2 = (nombre) => {
    console.log(`Hola ${nombre}`);

}

function suma(a, b) {
    return a + b;
}
const suma2 = (a, b) => {
    return a + b;
}
function getAleatorio() {
    return Math.random();
}
const getAleatorio2 = () => Math.random();
// saludar('Fernando');
// saludar('Fernando',true,40);
// saludar2('Fernando');
// saludarFlecha();
// saludarFlecha2('Pau');
console.log(getAleatorio());
console.log(getAleatorio2());

console.log(suma(1, 2));
console.log(suma2(1, 2));

