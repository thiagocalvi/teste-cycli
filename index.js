const express = require('express')
const app = express()
app.all('/', (req, res) => {
    res.send('<h1>Bem vindo! Esse é o meu primeiro deploy!!!!</h1>')
})
app.listen(process.env.PORT || 3000)