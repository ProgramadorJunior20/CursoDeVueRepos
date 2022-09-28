

const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: { 
        ciudad: 'New York',
        zip: 5959599,
        lat: 15.22233,
        lng: 20.44422
    }

}

const persona2 = { ...persona };

persona2.nombre = 'Peter'
persona2.edad = 17

console.log( persona );
console.log( persona2 );