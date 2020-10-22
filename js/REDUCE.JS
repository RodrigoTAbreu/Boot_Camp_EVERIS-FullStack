const  pets = [
    {name:'pull',
    type: 'dog',
    weight: 30,
    age: 10},
    
    {name:'fifi',
    type: 'cat',
    weight: 3,
    age: 3},

    {name:'frido',
    type: 'fish',
    weight: 5,
    age: 1},
    
    {name:'flash',
    type: 'turtle',
    weight: 11,
    age: 9},
    
    {name:'Joaquina',
    type: 'dog',
    weight: 20,
    age: 13},
]
/* -->>>PARA SABER O PESO OU A IDADE DE TODOS OS ELEMENTOS DE UM ARRAY */

//const totalWeitght = pets.reduce((total, pet)=>{
  // console.log(`Total: ${total}`)
   // console.log(`Pet: ${pet.name}`)

  //  return total + pet.weight // O return aqui é ncessário por ser o retorno do CALLBACK
//}, 0)

//console.log(totalWeitght)

/* o primeiro parametro TOTAL é onde será armazenado a soma dos elementos, o segundo PET é o proprio elemento. Ao final existe um 0zero que indica o valor inicial do TOTAL. */

/**
 * -->>> Com REDUCE podemos somar dois elementos como podemos ver com o o código abaixo
 */

//const totalWeitght = pets.reduce((total, pet)=>{
  //      return{
    //        totalAge: total.totalAge + pet.age,
      //      totalWeitght: total.totalWeitght + pet.weight
        //}
  //}, {totalAge:0, totalWeitght: 0})
  
  //console.log(totalWeitght)

  /*--->>> somando os pesos apenas de um tipo de elemento. */

  //const totalWeitght = pets.reduce((total, pet)=>{
   // if (pet.type !== 'dog') return total

    //return total + pet.weight
//},0)

//console.log(totalWeitght)

// const totalWeitght = pets.reduce((total, pet)=>{
//     return total + pet.weight
// }, 0)

// console.log(totalWeitght)

/*retornando apenas os elementos com um paramentro DOG por exemplo */
const totalWeitght = pets.filter((pet)=>{
    return pet.type ==='dog'
}).reduce((total, pet)=>{
    return total + pet.age
},0)
// const dog = pets.filter((pet) => {
//     return pet.type === 'dog'
// })
// console.log(dog)

console.log(totalWeitght)