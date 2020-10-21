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

/*MAP irá retornar um novo array com a mesma quantidade de elementos, que o array inicial */

const petName = pets.map((pet)=>{
    return pet.type
})

console.log(petName)