/*snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.*/

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        class: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        class: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        class: 'uccelli'
    },
]

const animal = animals.filter(animal => animal.class == 'mammiferi')
console.log(animal);