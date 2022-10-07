const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

//Middleware
// Requisi��es e respostas no formato json
app.use(express.json())

/*
// Get
app.route('/').get((req, res) => res.send('Hello'))
app.route('/sobre').get((req, res) => res.send('Hello sobre'))
*/

/*
// Get
app.route('/').get((req, res) => res.send(req.body))
*/

/*
// Post
app.route('/').post((req, res) => res.send(req.body))
*/

/*
// PUT
let Nome = "Paulo"

app.route('/').put((req, res) => {
    Nome = req.body.nome
    res.send(Nome)
})
// Exibe a resposta
app.route('/').get((req,res) => res.send(Nome))
*/
/*
// Delete
let Nome = "Paulo"
app.route('/').delete((req, res) => {
    Nome = ""
    res.send("Apagado!")
})
// Exibe a resposta
app.route('/').get((req, res) => res.send(Nome))
*/

/*
// params  Par�metros
// passar requisi��es pelo http
// POST PUT PATCH  passar um body em formato json
// Exemplo
// Use no navegador localhost:3000/ o parametro ex: localhost:3000/lazaro
app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

*/

/*
// params  Par�metros pelo body
// passar requisi��es pelo body
// POST PUT PATCH  passar um body em formato json
// Exemplo
app.route('/').post( (req, res) => {
    const { nome, idade } = req.body
    res.send(`Oi seu nome �: ${nome} e sua idade � ${idade}`)
})
*/
/*
// Query parametros
// Passa requisi��o via query
// exemplo de requisi��o localhost:3000/?Nome=L�zaro&idade=42&profiss%C3%A3o=FullStack
app.route('/').get( (req,res) => res.send(req.query) )
*/


// add axios consultando api do github
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/LazaroAssis')
        .then(result => res.send(result.data))
        .catch(error => console.log(error))
})