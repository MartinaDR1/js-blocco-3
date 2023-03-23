/*Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.*/

//Creo array 
const cars =[
    {
        marca:'Alfa Romeo',
        modello: 'aaa',
        alimentazione: 'benzina'
    },
    {
        marca:'Audi',
        modello: 'aaa',
        alimentazione: 'diesel'
    },
    {
        marca:'Dacia',
        modello: 'aaa',
        alimentazione: 'benzina'
    },
    {
        marca:'BMW',
        modello: 'aaa',
        alimentazione: 'gpl'
    },
    {
        marca:'Ferrari',
        modello: 'aaa',
        alimentazione: 'elettrico'
    },
    {
        marca:'Mercedes',
        modello: 'aaa',
        alimentazione: 'diesel'
    },
    {
        marca:'Toyota',
        modello: 'aaa',
        alimentazione: 'elettrico'
    },
    {
        marca:'Opel',
        modello: 'aaa',
        alimentazione: 'benzina'
    },
    {
        marca:'Renault',
        modello: 'aaa',
        alimentazione: 'diesel'
    },
    {
        marca:'Honda',
        modello: 'aaa',
        alimentazione: 'metano'
    },

]
console.log(cars);

cars.forEach((car)=>{
   console.log(car);
    
})

//Array auto benzina
const benzina = cars.filter((car) => {
    if (car.alimentazione == 'benzina'){
     return true
    }

})
console.log(benzina, 'Auto a benzina');

//Array auto diesel
const diesel = cars.filter((car) => {
    if (car.alimentazione == 'diesel'){
     return true
    }

})
console.log(diesel, 'Auto a diesel');

//Array auto altro
const other = cars.filter((car) => {
    if (car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina'){
     return true
    }

})
console.log(other, 'altro');