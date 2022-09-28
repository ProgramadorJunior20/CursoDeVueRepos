

const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']

const [ goku, vegeta, trunks, goten = 'No tiene valor'] = characters

/* console.log( goten ); */

/* const returnArray = () => { 

    return ['ABC', 12345]

} */

const returnArray = (arr) => { 

    return [arr[0], arr[1]]

}

/* const [ letters, numbers ] = returnArray() */
const [ letters, numbers ] = returnArray(['ABC', 12345])

console.log(letters, numbers)
