require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes) 

// rota inicial / endpoint
app.get('/usuario', (req,res) => {
    return res.json({usuario: 'Willian Silva'})
});

//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.jw2nlxo.mongodb.net/bancoAPINode?retryWrites=true&w=majority`
    )
     .then(() =>{
        console.log('Conectado com sucesso!!')
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })

