

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    /* power: 'Money' */
}


const { name, age, codeName, power} = person

/* console.log( name ); */


/* const createHero = ( person ) => {

    const { name, age, codeName, power = 'No tiene poder' } = person

    return {
        id: 1212121212,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }

} */

/* const createHero = ( person ) => {

    const { name, age, codeName, power = 'No tiene poder' } = person

    return {
        id: 1212121212,
        name,
        age,
        codeName,
        power
    }

} */

/* const createHero = ( { name, age, codeName, power = 'No tiene poder' } ) => {

    return {
        id: 1212121212,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }

} */

const createHero = ( { name: nombre, age, codeName, power = 'No tiene poder' } ) =>({
    id: 1212121212,
    nombre,
    age,
    codeName,
    power
}) 


console.log( createHero(person) );