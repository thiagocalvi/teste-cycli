const express = require('express')
const app = express()

app.use(express.json());

app.all('/', (req, res) => {
    res.send('<h1>Bem vindo! Esse é o meu primeiro deploy!!!!</h1>')
})

app.get('/json', (req, res)=>{
    res.json({
        nome: "Teste",
        message: "Bem vindo!",
        status: [
            "Tudo certo meu chapa",
            "Que triteza"
        ]
    })
})

app.listen(process.env.PORT || 3000)