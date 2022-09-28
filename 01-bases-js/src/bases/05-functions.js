

/* function saludar( nombre ) {
    return `Hola de nuevo ${nombre}`
} */

/* const saludar = function( nombre ) {
    return `Hola de nuevo ${nombre}`
} */

const saludar = ( nombre = 'Peter' ) => `Hola de nuevo ${nombre}`

const nombre = 'Tony'

/* console.log( saludar(nombre) ) */

const getUsers = () => ({ 
    uid: 'ABC123', 
    nameUser: 'Tony123'
})

/* console.log( getUsers() ); */

const heroes = [
    { 
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

/* const existe = heroes.some( (heroe) => heroe.id === 3 ) */
const {id, name} = heroes.find( (heroe) => heroe.id === 1 )

console.log( id, name );