/*Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]*/

//Creo array
const names =['pippo', 'Paolo', 'martina', 'ALESSIA'];


const name = names.map((names) => {
    return names[0].toUpperCase() + names.slice(1).toLowerCase();
});
console.log(name);