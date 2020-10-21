const  pets = [
    {name:'pull',
    type: 'dog',
    age: 10},
    {name:'fifi',
    type: 'cat',
    age: 3},
    {name:'frido',
    type: 'fish',
    age: 1},
]
const eMenorQueCinco = (numero) => {
    return numero <5
}

const newPets = pets.filter((pet) => { /*arrow function => que percorre o elemento PET dentro de PETS com o .FILTER*/
    return pet.age <5 /*retorna todo elemento PET.AGE menor que  < 5 */
} )

console.log(pets)
console.log(newPets)