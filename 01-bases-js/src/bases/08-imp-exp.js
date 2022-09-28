
/* import {owners} from './data/heroes'

const [dc, marvel] = owners

console.log(dc)
console.log(marvel) */
import superHeroes from '../data/heroes'

/* const getHeroById = (id) => {

    return superHeroes.find( hero => hero.id === id )
    

} */


export const getHeroById = (id) => superHeroes.find( hero => hero.id === id )
/* console.log( getHeroById(2) ) */


export const getHeroesByOwher = (owner) => superHeroes.filter( hero => hero.owner === owner )
/* console.log( getHeroesByOwher('Marvel') ) */




/* import {getHeroById, getHeroesByOwher} from './bases/08-imp-exp'

console.log( getHeroById(2) )
console.log( getHeroesByOwher('Marvel') ) */