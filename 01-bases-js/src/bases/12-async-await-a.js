
const miPromesa = () => { 
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            /* resolve('Tenemos un valor en promesa') */
            reject('REJECT en miPromesa')
        }, 1000)

    })
}




const medirTiempoAsync = async() => {

    try {

        console.log('inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('fin')

        return 'Fin de medir tiempo async'
        
    } catch (error) {
        return 'catch en medirTiempoAsync'
        /* throw 'Error en medirTiempoAsync' */
    }

    

}

medirTiempoAsync()
    .then( valor => console.log( 'THEN Exitoso:', valor ))
    .catch( err => console.log( 'Error:', err )) 