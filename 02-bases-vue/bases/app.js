
const app = Vue.createApp({
    /* template: `
    <h1> Hola Mundo </h1>
    <p> Desde Vue app.js </p>
    ` */

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo de nuevo')
            /* this.quote = "I'm Black Adams" */
            this.author = "Jefferson Murillo"

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')