import { getHeroById } from './bases/08-imp-exp'
/* console.log('inicio')

new Promise( (resolve, reject) => {

    console.log('Este es el cuerpo de una promesa')
    reject('promesa resualta con error')
    
})
.then(  console.log )
.catch( console.log )

console.log('fin') */

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroById( id )

            if ( hero ){
                resolve( hero )
            }else {
                reject('Heroe no existe')
            }
            

        }, 1000);
    })/* .then( console.log ) */

} 

getHeroByIdAsync( 1 )
    .then( h => {
        console.log(`El Héroe es: ${h.name}`);
    })
    .catch( console.log )



