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
    {name:'flash',
    type: 'turtle',
    age: 9},
    {name:'Joaquina',
    type: 'dog',
    age: 13},
]

/* --->>>> MAP <<<<-----
Varre todo o ARRAY e retorna um elemento para cada elemento do ARRAY.

MAP irá retornar um novo array com a mesma quantidade de elementos, que o array inicial 

podendo transformar os elementos em novo elemento

*/

const petName = pets.map((pet)=>{
   return pet.age /* podemos mudar para .NAME ou .TYPE ou .AGE */
})

console.log(petName)

/* --->>> FOR EACH <<<----
Não retorna um novo array, porem intera os elementos como o MAP


const forEachPetNames = []

const forEachPetNames = pets.forEach((pet) => {
    return forEachPetNames.push(pet.name)
})
console.log(forEachPetNames)
*/